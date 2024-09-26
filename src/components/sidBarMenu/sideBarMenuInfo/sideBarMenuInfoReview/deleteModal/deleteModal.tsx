import { useRecoilState } from 'recoil';
import { modalButton } from '../createReview/alertModal/alertModal.css';
import { reviewState } from '../../../../../recoil/atoms/reviewState';
import { useDeleteReview } from '../../../../../hooks/useMutationApi';
import { useOpen } from '../../../../../hooks/useOpen';

export const AlertModal = (id: { id: string }) => {
  const [, setIsDeleteReviewModalOpen] = useRecoilState(reviewState);
  const { Close, MenuControlldetail } = useOpen();
  const { deleteReviewData } = useDeleteReview({
    onClose: Close,
    onUpdateMenuDetail: MenuControlldetail,
  });
  const onClickConfirm = () => {
    deleteReviewData({ id: id.id });
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
