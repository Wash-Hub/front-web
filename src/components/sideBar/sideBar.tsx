import { sideBarMenu, sideBarWrapper, sidebarContainer, sidebarLogo, sidebarMainLogo } from './sideBar.css';
import { useRecoilState } from 'recoil';
import { menuState } from '../../recoil/atoms/menuState';
import { SidebarMenu } from '../sidBarMenu/sideBarMenu';
import { sidebarState } from '../../recoil/atoms/sidebarState';
import { SearchDetail } from '../search/searchDetail/searchDetail';
import Modal from 'react-modal';
import { loginModalState, loginState } from '../../recoil/atoms/loginState';
import { loginModal } from '../../styles/globalStyle.css';
import { SelectLogin } from '../login/selecktLogin/selectLogin';
import { MyPage } from '../myPage/myPage';
import { useOpen } from '../../hooks/useOpen';
import { activeMenuDisplay } from './mobile/bottomBar.css';

export const Sidebar = () => {
  const [isOpened] = useRecoilState(menuState);
  const [isMyPageOpened] = useRecoilState(menuState);
  const [isActiveSearch] = useRecoilState(sidebarState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  const { MenuControllMenu, MenuControllMyPage, Close } = useOpen();

  const onClickMenu = () => {
    MenuControllMenu();
  };

  const onClickMyPage = () => {
    MenuControllMyPage();
    setIsModalOpen((prevState) => ({ ...prevState, isModalOpen: !prevState.isModalOpen }));
  };

  const onClickMain = () => {
    Close();
  };

  return (
    <div>
      <div className={sideBarWrapper}>
        <div className={sidebarContainer}>
          <img className={sidebarMainLogo} src="public/logo.webp" alt="Main Logo" onClick={onClickMain} />
          <img
            className={`${sidebarLogo} ${isOpened.isOpened && activeMenuDisplay}`}
            src="public/icon_menu.webp"
            alt="Menu"
            onClick={onClickMenu}
          />
          <img
            className={`${sidebarLogo} ${isMyPageOpened.isMyPageOpened && login.isLogin && activeMenuDisplay}`}
            src="public/icon_people_outline.webp"
            alt="My Page"
            onClick={onClickMyPage}
          />
        </div>
        <div className={sideBarMenu}>
          {isOpened.isOpened && <SidebarMenu />}
          {isActiveSearch.isActiveSearch && <SearchDetail />}
        </div>
        {login.isLogin ? (
          <div>{isMyPageOpened.isMyPageOpened && <MyPage />}</div>
        ) : (
          <Modal
            ariaHideApp={false}
            isOpen={isModalOpen.isModalOpen}
            onRequestClose={() => setIsModalOpen({ isModalOpen: false })}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay: loginModal.overlay,
              content: {
                ...loginModal.content,
                width: window.innerWidth > 768 ? '30%' : '80%',
                marginTop: window.innerWidth > 768 ? '10%' : '40%',
              },
            }}
          >
            <SelectLogin />
          </Modal>
        )}
      </div>
    </div>
  );
};
