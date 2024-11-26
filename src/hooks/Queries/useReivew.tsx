import { postReview } from '@/api/postReview';
import { DeleteReviewData, ReviewData } from '@/type';
import { useMutationHandler } from './useMutationHandler';
import { deleteReview } from '@/api/deleteReview';

export const useReview = () => {
  const notifyCreateReview = '리뷰가 등록되었습니다.';
  const notifyDeleteReview = '리뷰가 삭제되었습니다.';
  const notifyError = '잠시후 다시 시도해주세요.';

  const { mutate: postReviewData } = useMutationHandler(
    (data: ReviewData) => postReview(data.files, data.desc, data.map),
    notifyCreateReview,
    notifyError,
  );
  const { mutate: deleteReviewData } = useMutationHandler(
    (data: DeleteReviewData) => deleteReview(data),
    notifyDeleteReview,
    notifyError,
  );

  return {
    postReviewData,
    deleteReviewData,
  };
};
