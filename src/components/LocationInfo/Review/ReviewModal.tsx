import { reviewState } from '@/recoil/atoms/reviewState';
import { closeModal } from '@/styles/globalStyle.css';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';

export const ReviewModal = () => {
  const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] = useRecoilState(reviewState);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isDeleteReviewModalOpen.isDeleteReviewModalOpen}
      onRequestClose={() => setIsDeleteReviewModalOpen((prev) => ({ ...prev, isDeleteReviewModalOpen: false }))}
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
      {/* <AlertModal id={item.id} /> */}
    </Modal>
  );
};
