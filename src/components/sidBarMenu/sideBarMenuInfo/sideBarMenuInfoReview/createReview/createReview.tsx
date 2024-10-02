import { useForm } from 'react-hook-form';
import {
  closeModal,
  createReviewButton,
  createReviewButtonContainer,
  createReviewContainer,
  createReviewForm,
  createReviewInput,
  createReviewInputImg,
  createReviewInputImgIcon,
  createReviewInputImgLabel,
  createReviewInputImgLabelImg,
  createReviewInputImgLabelWrapper,
  createReviewInputTitle,
  createReviewUnderLine,
} from './createReview.css';
import { FaCirclePlus } from 'react-icons/fa6';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { reviewState } from '../../../../../recoil/atoms/reviewState';
import { ReviewImg } from '../../../../../type';
import { useAxiosInterceptors } from '../../../../../hooks/useAxiosInterceptors';
import { currentLocationAtom } from '../../../../../recoil/atoms/mapState';
import Modal from 'react-modal';
import { AlertModal } from './alertModal/alertModal';
import { usePostReview } from '../../../../../hooks/useMutationApi';
import { useOpen } from '../../../../../hooks/useOpen';

export const CreateReview = () => {
  useAxiosInterceptors();
  const { register, handleSubmit } = useForm();
  const [, setReview] = useRecoilState(reviewState);
  const [image, setImage] = useState<ReviewImg>(null);
  const [file, setFile] = useState<File | null>(null);
  const currentLocation = useRecoilValue(currentLocationAtom);
  const [isCreateReviewModalOpen, setCreateReviewModalOpen] = useRecoilState(reviewState);
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
    setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: true }));
  };
  const { Close, MenuControlldetail } = useOpen();
  const { postReviewData } = usePostReview({
    onClose: Close,
    onUpdateMenuDetail: MenuControlldetail,
  });
  const onSubmit = (data: any) => {
    postReviewData({ files: file, desc: data.content, map: currentLocation.id });
    setReview((prev) => ({ ...prev, isOpened: false }));
  };
  return (
    <div className={createReviewContainer} id="createReview">
      <form className={createReviewForm} onSubmit={handleSubmit(onSubmit)}>
        <span className={createReviewInputTitle}>리뷰 사진 (최대 1장)</span>
        <div className={createReviewInputImgLabelWrapper}>
          <label htmlFor="imageUpload" className={createReviewInputImg}>
            <div className={createReviewInputImgLabel}>
              <FaCirclePlus className={createReviewInputImgIcon} />
              <span>이미지 추가하기</span>
            </div>
          </label>
          {image && <img className={createReviewInputImgLabelImg} src={image as string} alt="리뷰 이미지" />}
        </div>
        <input
          style={{ display: 'none' }}
          id="imageUpload"
          type="file"
          placeholder="이미지"
          {...register('name')}
          onChange={handleImageChange}
        />
        <div className={createReviewUnderLine} />
        <span className={createReviewInputTitle}>리뷰</span>
        <textarea
          className={createReviewInput}
          placeholder="리뷰 내용을 작성해주세요."
          {...register('content')}
          required
        />

        <div className={createReviewButtonContainer}>
          <button type="submit" className={createReviewButton({ width: 'regist' })}>
            리뷰 등록하기
          </button>
          <button type="button" onClick={onClickCancle} className={createReviewButton({ width: 'cancle' })}>
            취소
          </button>
        </div>
      </form>
      {isCreateReviewModalOpen.isCreateReviewModalOpen && (
        <Modal
          ariaHideApp={false}
          isOpen={isCreateReviewModalOpen.isCreateReviewModalOpen}
          onRequestClose={() => setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: false }))}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: closeModal.overlay,
            content: {
              ...closeModal.content,
              textAlign: closeModal.content.textAlign as React.CSSProperties['textAlign'],
              width: window.innerWidth > 768 ? '30%' : '60%',
            },
          }}
        >
          <AlertModal />
        </Modal>
      )}
    </div>
  );
};
