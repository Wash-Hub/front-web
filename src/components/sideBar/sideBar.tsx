import { useOpen } from '@/hooks/useOpen';
import { loginModalState, loginState } from '@/recoil/atoms/loginState';
import { menuState } from '@/recoil/atoms/menuState';
import { sidebarState } from '@/recoil/atoms/sidebarState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Modal from 'react-modal';
import { Login } from '../Auth/Login';
import { getMapAllInfo } from '@/api/getMapInfo';
import { mapInfoAtom, mapState } from '@/recoil/atoms/mapState';
import { location } from '@/type';
import { IconSearch } from '@/assets/icons/IconSearch';
import { IconHome } from '@/assets/icons/IconHome';
import { IconMenu } from '@/assets/icons/IconMenu';
import { IconUser } from '@/assets/icons/IconUser';
import { IconRefresh } from '@/assets/icons/IconRefresh';
import { IconExit } from '@/assets/icons/IconExit';
import { SideBarButton } from '../Button/SideBarButton';
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {
  const [isMyPageOpened] = useRecoilState(menuState);
  const [isActiveSearch] = useRecoilState(sidebarState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  const { MenuControllMenu, MenuControllMyPage } = useOpen();
  const navigate = useNavigate();

  const onClickMenu = () => {
    MenuControllMenu();
  };

  const onClickMyPage = () => {
    MenuControllMyPage();
    setIsModalOpen((prevState) => ({ ...prevState, isModalOpen: !prevState.isModalOpen }));
  };
  const onClickHome = () => {
    navigate('/');
  };

  const [locate] = useRecoilState<location>(mapState);
  const data = getMapAllInfo(locate);

  const setMapData = useSetRecoilState(mapInfoAtom);
  const changeLocate = () => {
    setMapData(data.data);
  };

  return (
    <div>
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8 rtl:border-l rtl:border-r-0 dark:border-gray-700 dark:bg-gray-900">
        <a href="#" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
          <img className="h-12 w-auto" src="/logo.webp" alt="WashHub Logo" />
          <p className="text-xl tracking-tight text-gray-600 dark:text-white">WashHub</p>
        </a>

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 flex-1 space-y-3">
            <div className="relative mx-3">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IconSearch />
              </span>

              <input
                type="text"
                className="w-full rounded-md border bg-white py-1.5 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                placeholder="Search"
              />
            </div>

            <SideBarButton onClick={onClickHome}>
              <IconHome />
              <span className="mx-2 text-sm font-medium">홈</span>
            </SideBarButton>

            <SideBarButton onClick={onClickMenu}>
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
              <a href="#" className="flex items-center gap-x-2">
                <img
                  className="h-7 w-7 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                  alt="avatar"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</span>
              </a>

              <a
                href="#"
                className="rotate-180 text-gray-500 transition-colors duration-200 hover:text-blue-500 rtl:rotate-0 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <IconExit />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
