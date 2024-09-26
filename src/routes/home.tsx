import { Sidebar } from '../components/sideBar/sideBar';
import { container, map, pageSideBar } from '../styles/globalStyle.css';
import { KakaoMap } from '../components/map/map';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState, userUniqIdAtom } from '../recoil/atoms/loginState';
import { useEffect } from 'react';

export const Home = () => {
  const id = useRecoilValue(userUniqIdAtom);
  const setIsLogin = useSetRecoilState(loginState);

  useEffect(() => {
    if (id === null) {
      setIsLogin((prevState) => ({ ...prevState, isLogin: false }));
    }
    if (id !== null) {
      setIsLogin((prevState) => ({ ...prevState, isLogin: true }));
    }
  }, [id, setIsLogin]);

  return (
    <div className={container}>
      <div className={pageSideBar}>
        <Sidebar />
      </div>
      <div className={map}>
        <KakaoMap />
      </div>
    </div>
  );
};
