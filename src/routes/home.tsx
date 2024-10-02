import { Sidebar } from '../components/sideBar/sideBar';
import { container, map, pageSideBar } from '../styles/globalStyle.css';
import { KakaoMap } from '../components/map/map';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState, userUniqIdAtom } from '../recoil/atoms/loginState';
import { useEffect } from 'react';
import { useClearStorageOnClose } from '../hooks/useClearStorageOnClose';
import { BottomBar } from '../components/sideBar/mobile/bottomBar';
import { windowSizeState } from '../recoil/atoms/sidebarState';

export const Home = () => {
  // useClearStorageOnClose();
  const id = useRecoilValue(userUniqIdAtom);
  const setIsLogin = useSetRecoilState(loginState);
  const [isDesktop, setDesktop] = useRecoilState(windowSizeState);
  useEffect(() => {
    if (id === null) {
      setIsLogin((prevState) => ({ ...prevState, isLogin: false }));
    }
    if (id !== null) {
      setIsLogin((prevState) => ({ ...prevState, isLogin: true }));
    }
  }, [id, setIsLogin]);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={container}>
      {isDesktop ? (
        <div className={pageSideBar}>
          <Sidebar />
        </div>
      ) : (
        <div>
          <BottomBar />
        </div>
      )}
      <div className={map}>
        <KakaoMap />
      </div>
    </div>
  );
};
