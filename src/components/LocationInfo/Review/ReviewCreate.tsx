import { useAxiosInterceptors } from '@/hooks/Auth/useAxiosInterceptors';
import { currentLocationAtom } from '@/recoil/atoms/mapState';
import { reviewState } from '@/recoil/atoms/reviewState';
import { ReviewImg } from '@/type';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FaCirclePlus } from 'react-icons/fa6';
import { ReviewModal } from './ReviewModal/ReviewModal';
import { useReview } from '@/hooks/Queries/useReivew';
import { useNavigate } from 'react-router-dom';

export const ReviewCreate = () => {
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

  const handleImageCancle = () => {
    setImage(null);
    setFile(null);
  };

  const onClickCancle = () => {
    setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: true }));
  };
  const navigate = useNavigate();
  const { postReviewData } = useReview();
  const onSubmit = (data: any) => {
    data = { files: file, desc: data.content, map: currentLocation.id };
    postReviewData(data);
    setReview((prev) => ({ ...prev, isOpened: false }));
    navigate(0);
  };

  return (
    <div className="flex flex-col items-center pb-16 pt-5" id="createReview">
      <form className="mb-5 flex w-11/12 max-w-[600px] flex-col px-5" onSubmit={handleSubmit(onSubmit)}>
        <span className="mb-2 pl-1 text-lg font-semibold text-gray-800">리뷰 사진 (최대 1장)</span>
        <div className="mb-3 flex flex-row items-center">
          <label
            htmlFor="imageUpload"
            className="block h-28 w-1/3 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 text-center text-sm hover:border-blue-500"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <FaCirclePlus className="mb-2 text-2xl text-blue-500" />
              <span>이미지 추가하기</span>
            </div>
          </label>
          {image && (
            <img
              onClick={handleImageCancle}
              className="ml-5 h-[12vh] w-1/3 cursor-pointer rounded-lg object-cover shadow-md"
              src={image as string}
              alt="리뷰 이미지"
            />
          )}
        </div>
        <input id="imageUpload" type="file" className="hidden" {...register('name')} onChange={handleImageChange} />
        <div className="my-4 w-full border-t border-gray-300"></div>
        <span className="mb-4 pl-1 text-lg font-semibold text-gray-800">리뷰</span>
        <textarea
          className="font-pretendard h-36 w-full resize-none rounded-lg border border-gray-300 p-3 text-sm outline-none transition duration-300 focus:border-blue-500 focus:shadow-lg"
          placeholder="리뷰 내용을 작성해주세요."
          {...register('content')}
          required
        />
        <div className="flex w-full justify-between pt-6">
          <button
            type="submit"
            className="h-12 w-3/5 rounded-lg bg-blue-500 px-5 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            리뷰 등록하기
          </button>
          <button
            type="button"
            onClick={onClickCancle}
            className="ml-2 h-12 w-2/5 rounded-lg bg-white px-5 font-semibold text-black shadow-md transition hover:bg-gray-100"
          >
            취소
          </button>
        </div>
      </form>
      {isCreateReviewModalOpen.isCreateReviewModalOpen && <ReviewModal />}
    </div>
  );
};
