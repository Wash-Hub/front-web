import { sideBarMenu, sideBarWrapper, sidebarContainer, sidebarLogo, sidebarMainLogo } from './sideBar.css';
import { useRecoilState } from 'recoil';
import { menuState, reviewState } from '../../recoil/atoms/menuState';
import { SidebarMenu } from '../sidBarMenu/sideBarMenu';
import { sidebarState } from '../../recoil/atoms/sidebarState';
import { SearchDetail } from '../search/searchDetail/searchDetail';

export const Sidebar = () => {
  const [isOpened, setIsOpened] = useRecoilState(menuState);
  const [isActiveSearch, setIsActiveSearch] = useRecoilState(sidebarState);
  const [, setReview] = useRecoilState(reviewState);
  const onClickMenu = () => {
    setIsOpened((prevState) => ({ ...prevState, isOpened: !prevState.isOpened }));
    setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: false }));
    setReview({ isOpened: false });
  };
  return (
    <div className={sideBarWrapper}>
      <div className={sidebarContainer}>
        <img className={sidebarMainLogo} src="public\logo.webp" alt="" />
        <img className={sidebarLogo} src="public\icon_menu.webp" alt="" onClick={onClickMenu} />
        <img className={sidebarLogo} src="public\icon_people_outline.webp" alt="" />
      </div>
      {
        <div className={sideBarMenu}>
          {isOpened.isOpened && <SidebarMenu />} {isActiveSearch.isActiveSearch && <SearchDetail />}
        </div>
      }
    </div>
  );
};
