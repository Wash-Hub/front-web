import { reviewState } from '@/recoil/atoms/reviewState';
import { closeModal } from '@/styles/globalStyle.css';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
export const InfoModal = () => {
  const [isCreateReviewModalOpen, setCreateReviewModalOpen] = useRecoilState(reviewState);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isCreateReviewModalOpen.isCreateReviewModalOpen}
      onRequestClose={() => setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: false }))}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      style={{
        overlay: { ...closeModal.overlay },
        content: {
          ...closeModal.content,
          textAlign: closeModal.content.textAlign as React.CSSProperties['textAlign'],
          width: window.innerWidth > 768 ? '30%' : '60%',
        },
      }}
    >
      {/* <AlertModal /> */}
    </Modal>
  );
};
