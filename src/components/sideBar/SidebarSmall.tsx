import { IconHome } from '@/assets/icons/IconHome';
import { Link } from 'react-router-dom';
import { SideBarButton } from '../Button/SideBarButton';
import { IconRefresh } from '@/assets/icons/IconRefresh';
import { IconUser } from '@/assets/icons/IconUser';
import { IconMenu } from '@/assets/icons/IconMenu';
import { useMenu } from '@/hooks/useMenu';
import { useRecoilState } from 'recoil';
import { currentLocationAtom } from '@/recoil/atoms/mapState';
export const SidebarSmall = () => {
  const { onClickHome, onClickMenu, onClickMyPage, changeLocate } = useMenu();
  const [currentLocation] = useRecoilState(currentLocationAtom);
  return (
    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8 rtl:border-l rtl:border-r-0 dark:border-gray-700 dark:bg-gray-900">
      <nav className="flex flex-1 flex-col space-y-6">
        <Link to="/" className="p-[1px]">
          <img className="h-10 w-auto" src="/logo.webp" alt="" />
        </Link>

        <SideBarButton onClick={onClickHome}>
          <IconHome />
        </SideBarButton>
        <SideBarButton onClick={() => onClickMenu(currentLocation.id)}>
          <IconMenu />
        </SideBarButton>

        <SideBarButton onClick={onClickMyPage}>
          <IconUser />
        </SideBarButton>

        <SideBarButton onClick={changeLocate}>
          <IconRefresh />
        </SideBarButton>
      </nav>

      <div className="flex flex-col space-y-6">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
          alt=""
        />
      </div>
    </aside>
  );
};
