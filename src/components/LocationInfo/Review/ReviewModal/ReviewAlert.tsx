import { reviewState } from '@/recoil/atoms/reviewState';
import { useRecoilState } from 'recoil';

export const ReviewAlert = () => {
  const [, setReview] = useRecoilState(reviewState);
  const [, setCreateReviewModalOpen] = useRecoilState(reviewState);

  const onClickConfirm = () => {
    setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: false }));
    setReview((prev) => ({ ...prev, isOpened: false }));
  };

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold">리뷰 작성시에는 이동할 수 없습니다.</p>
        <p className="text-sm text-gray-600">취소하시겠습니까?</p>
      </div>
      <div className="flex justify-center">
        <button
          className="mx-2 rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
          onClick={onClickConfirm}
        >
          확인
        </button>
        <button
          className="mx-2 rounded-lg border border-gray-300 bg-white px-6 py-2 text-black transition duration-300 hover:bg-gray-100"
          onClick={() => setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: false }))}
        >
          취소
        </button>
      </div>
    </div>
  );
};
