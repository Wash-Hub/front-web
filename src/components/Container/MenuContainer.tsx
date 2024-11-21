import { useRecoilState } from 'recoil';
import { SidebarSmall } from '../SideBar/SidebarSmall';
import { loginModalState, loginState } from '@/recoil/atoms/loginState';
import { LoginModal } from '../Auth/LoginModal';

export const MenuContainer = ({ children }: React.PropsWithChildren<{}>) => {
  const [login] = useRecoilState(loginState);
  const [loginModal] = useRecoilState(loginModalState);
  return (
    <div>
      <SidebarSmall />
      <div
        className="absolute left-16 top-0 h-screen w-[360px] overflow-y-scroll bg-white"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children}
      </div>

      {loginModal.isModalOpen && !login.isLogin && <LoginModal />}
    </div>
  );
};
