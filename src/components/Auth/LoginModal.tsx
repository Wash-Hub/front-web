import { loginModalState } from '@/recoil/atoms/loginState';
import { loginModal } from '@/styles/globalStyle.css';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import { Login } from './Login';

export const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(loginModalState);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isModalOpen.isModalOpen}
      onRequestClose={() => setIsModalOpen({ isModalOpen: false })}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      style={{
        overlay: { ...loginModal.overlay },
        content: {
          ...loginModal.content,
          width: window.innerWidth > 768 ? '30%' : '80%',
          marginTop: window.innerWidth > 768 ? '10%' : '40%',
        },
      }}
    >
      <Login />
    </Modal>
  );
};
