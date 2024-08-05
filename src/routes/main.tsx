import { Sidebar } from '../components/sideBar/sideBar';
import { container, map, pageSideBar } from '../styles/globalStyle.css';
import { KakaoMap } from '../components/map/map';

export const Main = () => {
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
