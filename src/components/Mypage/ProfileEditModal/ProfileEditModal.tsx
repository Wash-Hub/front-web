import { myPageState } from '@/recoil/atoms/myPageState';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';
import { ProfileEditContent } from './ProfileEditContent';

export const ProfileEditModal = ({ name, email }: { name: string; email: string }) => {
  const [isOpen, setIsOpen] = useRecoilState(myPageState);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen.isModalOpened}
      onRequestClose={() => setIsOpen((prev) => ({ ...prev, isModalOpened: false }))}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          textAlign: 'center',
          width: window.innerWidth > 768 ? '30%' : '70%',
        },
      }}
    >
      <ProfileEditContent name={name} email={email} />
    </Modal>
  );
};
