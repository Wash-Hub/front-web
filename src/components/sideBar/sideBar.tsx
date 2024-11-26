import { IconHome } from '@/assets/icons/IconHome';
import { IconMenu } from '@/assets/icons/IconMenu';
import { IconUser } from '@/assets/icons/IconUser';
import { IconRefresh } from '@/assets/icons/IconRefresh';
import { IconExit } from '@/assets/icons/IconExit';
import { SideBarButton } from '../Button/SideBarButton';
import { Link } from 'react-router-dom';
import { useMenu } from '@/hooks/useMenu';
import { currentLocationAtom } from '@/recoil/atoms/mapState';
import { useRecoilState } from 'recoil';
import { loginModalState, loginState } from '@/recoil/atoms/loginState';
import { LoginModal } from '../Auth/LoginModal';
import { SearchBar } from '../Search/SearchBar';
import { ProfileLogout } from '../Profile/ProfileLogout';
import { ProfileLogin } from '../Profile/ProfileLogin';
import { LoginButton } from '../Button/LoginButton';
import { useLogout } from '@/hooks/Auth/useAuth';
export const SideBar = () => {
  const { onClickHome, onClickMenu, onClickMyPage, changeLocate } = useMenu();

  const [login] = useRecoilState(loginState);
  const [loginModal, setLoginModal] = useRecoilState(loginModalState);
  const [currentLocation] = useRecoilState(currentLocationAtom);
  const onClickLogin = () => {
    if (!loginModal.isModalOpen) {
      setLoginModal({ isModalOpen: true });
    }
  };

  const logout = useLogout();
  const onClickLogout = () => {
    logout();
  };
  return (
    <div>
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8 rtl:border-l rtl:border-r-0 dark:border-gray-700 dark:bg-gray-900">
        <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
          <img className="h-12 w-auto" src="/logo.webp" alt="WashHub Logo" />
          <p className="text-xl tracking-tight text-gray-600 dark:text-white">WashHub</p>
        </Link>

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 flex-1 space-y-3">
            <SearchBar />

            <SideBarButton onClick={onClickHome}>
              <IconHome />
              <span className="mx-2 text-sm font-medium">홈</span>
            </SideBarButton>

            <SideBarButton onClick={() => onClickMenu(currentLocation.id)}>
              <IconMenu />
              <span className="mx-2 text-sm font-medium">메뉴</span>
            </SideBarButton>

            <SideBarButton onClick={onClickMyPage}>
              <IconUser />
              <span className="mx-2 text-sm font-medium">마이페이지</span>
            </SideBarButton>

            <SideBarButton onClick={changeLocate}>
              <IconRefresh />
              <span className="mx-2 text-sm font-medium">현위치에서 검색하기</span>
            </SideBarButton>
          </nav>

          <div className="mt-6">
            <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
              <h2 className="text-sm font-medium text-gray-800 dark:text-white">wash-hub</h2>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">@copyLight 2024. All rights reserved.</p>

              <img
                className="mt-2 h-32 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80"
                alt=""
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              {login.isLogin ? (
                <>
                  <ProfileLogin />
                  <LoginButton onClick={onClickLogout}>
                    <IconExit />
                  </LoginButton>
                </>
              ) : (
                <>
                  <ProfileLogout />
                  <LoginButton onClick={onClickLogin}>
                    <IconExit />
                  </LoginButton>
                </>
              )}
            </div>
          </div>
        </div>
      </aside>
      {/* {loginModal.isModalOpen && !login.isLogin && <LoginModal />} */}
    </div>
  );
};
