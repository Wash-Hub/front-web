import { container, map, pageSideBar } from '../styles/globalStyle.css';
import { KakaoMap } from '../components/Map/Map';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState, userUniqIdAtom } from '../recoil/atoms/loginState';
import { useEffect } from 'react';
import { useClearStorageOnClose } from '../hooks/useClearStorageOnClose';
import { windowSizeState } from '../recoil/atoms/sidebarState';
import { SideBar } from '@/components/SideBar/Sidebar';

export const Home = () => {
  useClearStorageOnClose();
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
      <div className={pageSideBar}>
        <SideBar />
      </div>
      <div className={map}>
        <KakaoMap />
      </div>
    </div>
  );
};
