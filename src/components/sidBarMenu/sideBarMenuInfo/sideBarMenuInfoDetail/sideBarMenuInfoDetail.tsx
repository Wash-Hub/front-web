import { useLocate } from '../../../../hooks/useLocate';
import { Map, useMap } from 'react-kakao-maps-sdk';
import {
  sidbarMenuInfoDetailButton,
  sideBarMenuInfoDetailContainer,
  sidebarMenuImg,
  sidebarMenuInfoDetail,
  sidebarMenuInfoDetailIcon,
  sidebarMenuInfoDetailText,
} from './sideBarMenuInfoDetail.css';
// import { FiPhone } from 'react-icons/fi';
import { RiMapPin2Line } from 'react-icons/ri';
import { useMiniMapScript } from '../../../../hooks/useMapScript';
import { getKakaoMapId } from '../../../../api/getKakaoMapId';

export const SideBarMenuInfoDetail = (mapData: any) => {
  useMiniMapScript(mapData.data.latitude, mapData.data.longitude);
  useLocate();
  const id = getKakaoMapId(mapData.data.longitude, mapData.data.latitude, mapData.data.placeName);
  const onClickMap = () => {
    window.open(`https://place.map.kakao.com/${id}`);
  };
  return (
    <div className={sideBarMenuInfoDetailContainer}>
      <div className={sidebarMenuImg} id="miniMap" />
      <div>
        <div className={sidebarMenuInfoDetail}>
          <div className={sidebarMenuInfoDetailIcon}>
            <RiMapPin2Line />
          </div>
          <div className={sidebarMenuInfoDetailText}>{mapData.data.roadName}</div>
        </div>
        <div>
          <button onClick={onClickMap} className={sidbarMenuInfoDetailButton}>
            카카오 맵으로 보기
          </button>
        </div>
      </div>
    </div>
  );
};
