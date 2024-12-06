import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState, userUniqIdAtom } from '../recoil/atoms/loginState';
import { useEffect } from 'react';
import { windowSizeState } from '../recoil/atoms/sidebarState';
import { SideBar } from '@/components/SideBar/sideBar';

export const Home = () => {
  const id = useRecoilValue(userUniqIdAtom);
  const setIsLogin = useSetRecoilState(loginState);
  const [, setDesktop] = useRecoilState(windowSizeState);

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
    <div className={`absolute left-0 top-0 z-[10]`}>
      <SideBar />
    </div>
  );
};
