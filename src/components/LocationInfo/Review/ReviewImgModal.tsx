import { reviewState } from '@/recoil/atoms/reviewState';
import { imgModal } from '@/styles/globalStyle.css';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
export const ReviewImgModal = () => {
  const [isImgModalOpen, setIsImgModalOpen] = useRecoilState(reviewState);
  const [selectedImg] = useRecoilState(reviewState);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isImgModalOpen.isImgModalOpen}
      onRequestClose={() => setIsImgModalOpen((prev) => ({ ...prev, isImgModalOpen: false }))}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: imgModal.overlay,
        content: imgModal.content,
      }}
    >
      <img src={selectedImg.selectedImg} alt="" />
    </Modal>
  );
};
