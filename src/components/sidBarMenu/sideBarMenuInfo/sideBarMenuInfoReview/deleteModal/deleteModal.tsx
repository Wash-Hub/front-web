import { useRecoilState } from 'recoil';
import { modalButton } from '../createReview/alertModal/alertModal.css';
import { reviewState } from '../../../../../recoil/atoms/reviewState';
import { useMutation } from 'react-query';
import { deleteReview } from '../../../../../api/deleteReview';

export const AlertModal = (id: { id: string }) => {
  const [, setIsDeleteReviewModalOpen] = useRecoilState(reviewState);
  const mutation = useMutation((data: any) => deleteReview(data.id), {
    onSuccess: (status) => {
      if (Number(status) === 200) {
        alert('리뷰가 삭제되었습니다.');
      } else {
        console.log(status);
        alert('리뷰 삭제 중 오류가 발생했습니다. 잠시후 다시 시도해주세요.');
      }
    },
    onError: () => {
      alert('리뷰 등록 중 오류가 발생했습니다. 잠시후 다시 시도해주세요.');
    },
  });
  const onClickConfirm = () => {
    mutation.mutate({ id: id.id });
    setIsDeleteReviewModalOpen((prev) => ({ ...prev, isDeleteReviewModalOpen: false }));
  };
  return (
    <div>
      <div>
        <p>정말로 삭제 하시겠습니까?</p>
      </div>
      <div>
        <button style={{ ...modalButton.base, ...modalButton.confirm }} onClick={onClickConfirm}>
          확인
        </button>
        <button
          style={{ ...modalButton.base, ...modalButton.cancel }}
          onClick={() => setIsDeleteReviewModalOpen((prev) => ({ ...prev, isDeleteReviewModalOpen: false }))}
        >
          취소
        </button>
      </div>
    </div>
  );
};
