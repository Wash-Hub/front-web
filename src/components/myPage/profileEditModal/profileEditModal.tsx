import { useForm } from 'react-hook-form';
import {
  modalButton,
  ProfileEditModalButtonContainer,
  ProfileEditModalContainer,
  ProfileEditModalForm,
  ProfileEditModalInput,
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
  const setIsOpened = useSetRecoilState(myPageState);

  const onClickCancle = () => {
    setIsOpened((prev) => ({ ...prev, isModalOpened: false }));
  };
  const { Close, MenuControllMyPage } = useOpen();
  const { patchProfileData } = usePatchProfile({
    onClose: Close,
    onUpdateMenuMyPage: MenuControllMyPage,
  });
  const onSubmit = (data: any) => {
    patchProfileData({ name: data.name, email: data.email });
    setIsOpened((prev) => ({ ...prev, isModalOpened: false }));
  };
  return (
    <div className={ProfileEditModalContainer}>
      <form className={ProfileEditModalForm} onSubmit={handleSubmit(onSubmit)}>
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
