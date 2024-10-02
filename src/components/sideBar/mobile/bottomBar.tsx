import { useRecoilState } from 'recoil';
import { loginModalState, loginState } from '../../../recoil/atoms/loginState';
import { useOpen } from '../../../hooks/useOpen';
import { bottomBarLogo, bottomBarWrapper, pageBottomBarMenu } from './bottomBar.css';
import { sideBarMenu, sideBarWrapper } from '../sideBar.css';
import { menuState } from '../../../recoil/atoms/menuState';
import { sidebarState } from '../../../recoil/atoms/sidebarState';
import { SidebarMenu } from '../../sidBarMenu/sideBarMenu';
import { SearchDetail } from '../../search/searchDetail/searchDetail';
import { MyPage } from '../../myPage/myPage';
import Modal from 'react-modal';
import { loginModal, pageBottomBar } from '../../../styles/globalStyle.css';
import { SelectLogin } from '../../login/selecktLogin/selectLogin';
export const BottomBar = () => {
  const [isOpened] = useRecoilState(menuState);
  const [isMyPageOpened] = useRecoilState(menuState);
  const [isActiveSearch] = useRecoilState(sidebarState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  const { MenuControllMenu, MenuControllMyPage } = useOpen();

  const onClickMenu = () => {
    MenuControllMenu();
  };

  const onClickMyPage = () => {
    MenuControllMyPage();
    setIsModalOpen((prevState) => ({ ...prevState, isModalOpen: !prevState.isModalOpen }));
  };

  return (
    <div>
      <div className={pageBottomBar}>
        <div className={bottomBarWrapper}>
          <img className={bottomBarLogo} src="public/logo.webp" alt="Main Logo" />
          <img className={bottomBarLogo} src="public/icon_menu.webp" alt="Menu" onClick={onClickMenu} />
          <img className={bottomBarLogo} src="public/icon_people_outline.webp" alt="My Page" onClick={onClickMyPage} />
        </div>
      </div>
      <div className={pageBottomBarMenu}>
        <div className={sideBarWrapper}>
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
    </div>
  );
};
