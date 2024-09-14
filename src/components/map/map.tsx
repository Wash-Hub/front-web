import { useLocate } from '../../hooks/useLocate';
import { location } from '../../type';
import { useRecoilState } from 'recoil';
import { mapState } from '../../recoil/atoms/mapState';
import { useMapScript } from '../../hooks/useMapScript';
import { mapButton } from './map.css';
import { useMap } from '../../hooks/useMap';

export const KakaoMap = () => {
  useMap();

  // 현재 위치 정보 받아오기
  const [locate] = useRecoilState<location>(mapState);
  useLocate();
  useMapScript(locate.latitude, locate.longitude, true);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
      <div className={mapButton}>현위치에서 검색하기</div>
    </div>
  );
};
