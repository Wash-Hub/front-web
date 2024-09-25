import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCirclePlus } from 'react-icons/fa6';
import { ProfileEditImg } from '../../../type';
import {
  modalButton,
  ProfileEditModalButtonContainer,
  ProfileEditModalContainer,
  ProfileEditModalForm,
  ProfileEditModalInput,
  ProfileEditModalInputImg,
  ProfileEditModalInputImgIcon,
  ProfileEditModalInputImgLabel,
  ProfileEditModalInputImgLabelImg,
  ProfileEditModalInputImgLabelWrapper,
  ProfileEditModalInputTitle,
} from './profileEditModal.css';
import { useSetRecoilState } from 'recoil';
import { myPageState } from '../../../recoil/atoms/myPageState';
import { useOpen } from '../../../hooks/useOpen';
import { usePatchProfile } from '../../../hooks/useMutationApi';
import { useAxiosInterceptors } from '../../../hooks/useAxiosInterceptors';

export const ProfileEditModal = (data: { name: string; email: string }) => {
  useAxiosInterceptors();

  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState<ProfileEditImg>(null);
  const [file, setFile] = useState<File | null>(null);
  const setIsOpened = useSetRecoilState(myPageState);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const onClickCancle = () => {
    setIsOpened((prev) => ({ ...prev, isModalOpened: false }));
  };
  const { Close, MenuControllMyPage } = useOpen();
  const { patchProfileData } = usePatchProfile({
    onClose: Close,
    onUpdateMenuMyPage: MenuControllMyPage,
  });
  const onSubmit = (data: any) => {
    patchProfileData({ name: data.name, email: data.email, profileImg: file });
    setIsOpened((prev) => ({ ...prev, isModalOpened: false }));
  };
  return (
    <div className={ProfileEditModalContainer}>
      <form className={ProfileEditModalForm} onSubmit={handleSubmit(onSubmit)}>
        <span className={ProfileEditModalInputTitle}>변경할 사진을 선택해주세요.</span>
        <div className={ProfileEditModalInputImgLabelWrapper}>
          <label htmlFor="imageUpload" className={ProfileEditModalInputImg}>
            <div className={ProfileEditModalInputImgLabel}>
              <FaCirclePlus className={ProfileEditModalInputImgIcon} />
              <span>이미지 선택하기</span>
            </div>
          </label>
          {image && <img className={ProfileEditModalInputImgLabelImg} src={image as string} alt="프로필 이미지" />}
          <input
            style={{ display: 'none' }}
            id="imageUpload"
            type="file"
            placeholder="이미지"
            {...register('image')}
            onChange={handleImageChange}
          />
        </div>
        <span className={ProfileEditModalInputTitle}>이메일</span>
        <input
          className={ProfileEditModalInput}
          type="email"
          placeholder="이메일"
          {...register('email')}
          defaultValue={data.email}
          required
        />
        <span className={ProfileEditModalInputTitle}>닉네임</span>
        <input
          className={ProfileEditModalInput}
          type="text"
          placeholder="닉네임"
          {...register('name')}
          defaultValue={data.name}
          required
        />
        <div className={ProfileEditModalButtonContainer}>
          <button type="submit" style={{ ...modalButton.base, ...modalButton.confirm }}>
            변경
          </button>
          <button type="button" onClick={onClickCancle} style={{ ...modalButton.base, ...modalButton.cancel }}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};
