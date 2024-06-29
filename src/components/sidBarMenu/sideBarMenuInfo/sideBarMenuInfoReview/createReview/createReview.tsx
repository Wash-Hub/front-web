import { useForm } from 'react-hook-form';
import {
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
import { useRecoilState } from 'recoil';
import { reviewState } from '../../../../../recoil/atoms/menuState';
import { useState } from 'react';

export const CreateReview = () => {
  const { register, handleSubmit } = useForm();
  const [review, setReview] = useRecoilState(reviewState);
  const [image, setImage] = useState<string | null | ArrayBuffer>(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const onClickCancle = () => {
    setReview({ isOpened: false });
  };
  const onSubmit = (data: any) => {
    console.log(data);
    setReview({ isOpened: false });
  };
  return (
    <div className={createReviewContainer}>
      <form className={createReviewForm} onSubmit={handleSubmit(onSubmit)}>
        <span className={createReviewInputTitle}>리뷰 사진 (필수, 최대 1장)</span>
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
        <textarea className={createReviewInput} placeholder="리뷰 내용을 작성해주세요." {...register('content')} />

        <div className={createReviewButtonContainer}>
          <button type="submit" className={createReviewButton({ width: 'regist' })}>
            리뷰 작성하기
          </button>
          <button onClick={onClickCancle} className={createReviewButton({ width: 'cancle' })}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};
