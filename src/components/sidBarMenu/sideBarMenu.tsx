import { Search } from '../search/search';
import { sidebarMenuContainer, sidebarMenuItem, sidebarMenuSearch } from './sideBarMenu.css';
import { SideBarMenuInfo } from './sideBarMenuInfo/sideBarMenuInfo';

export const SidebarMenu = () => {
  return (
    <div className={sidebarMenuContainer}>
      <div className={sidebarMenuSearch}>
        <Search />
      </div>
      <div className={sidebarMenuItem}>
        <SideBarMenuInfo />
      </div>
    </div>
  );
};
