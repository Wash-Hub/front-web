import { useRecoilState } from 'recoil';
import { reviewState } from '../../../../../../recoil/atoms/reviewState';
import { modalButton } from './alertModal.css';

export const AlertModal = () => {
  const [, setReview] = useRecoilState(reviewState);
  const [, setCreateReviewModalOpen] = useRecoilState(reviewState);

  const onClickConfirm = () => {
    setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: false }));
    setReview((prev) => ({ ...prev, isOpened: false }));
  };
  return (
    <div>
      <div>
        <p>리뷰 작성시에는 이동할 수 없습니다.</p>
        <p>취소하시겠습니까?</p>
      </div>
      <div>
        <button style={{ ...modalButton.base, ...modalButton.confirm }} onClick={onClickConfirm}>
          확인
        </button>
        <button
          style={{ ...modalButton.base, ...modalButton.cancel }}
          onClick={() => setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: false }))}
        >
          취소
        </button>
      </div>
    </div>
  );
};
