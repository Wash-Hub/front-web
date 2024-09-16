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
import { useEffect, useRef } from 'react';
export const Sidebar = () => {
  const [isOpened, setIsOpened] = useRecoilState(menuState);
  const [isMyPageOpened, setIsMyPageOpened] = useRecoilState(menuState);
  const [isActiveSearch] = useRecoilState(sidebarState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  const { MenuControllMenu, MenuControllMyPage } = useOpen();

  const sidebarRef = useRef<HTMLDivElement>(null);

  // 사이드바 외부를 클릭했을 때 닫히도록 설정
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpened({ isOpened: false });
        setIsMyPageOpened({ isMyPageOpened: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpened, setIsMyPageOpened]);

  const onClickMenu = () => {
    MenuControllMenu();
  };
  const onClickMyPage = () => {
    MenuControllMyPage();
    setIsModalOpen((prevState) => ({ ...prevState, isModalOpen: !prevState.isModalOpen }));
  };

  return (
    <div ref={sidebarRef}>
      <div className={sideBarWrapper}>
        <div className={sidebarContainer}>
          <img className={sidebarMainLogo} src="public/logo.webp" alt="Main Logo" />
          <img className={sidebarLogo} src="public/icon_menu.webp" alt="Menu" onClick={onClickMenu} />
          <img className={sidebarLogo} src="public/icon_people_outline.webp" alt="My Page" onClick={onClickMyPage} />
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
              content: loginModal.content,
            }}
          >
            <SelectLogin />
          </Modal>
        )}
      </div>
    </div>
  );
};
