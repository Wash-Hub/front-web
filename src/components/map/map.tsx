import { useLocate } from '../../hooks/useLocate';
import { location } from '../../type';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mapInfoAtom, mapState } from '../../recoil/atoms/mapState';
import { useMapScript } from '../../hooks/useMapScript';
import { mapButton } from './map.css';
import { useMap } from '../../hooks/useMap';
import { getMapAllInfo } from '../../api/getMapInfo';

export const KakaoMap = () => {
  const [locate] = useRecoilState<location>(mapState);
  const setMapData = useSetRecoilState(mapInfoAtom);
  const data = getMapAllInfo(locate);
  useLocate();
  useMap(locate);
  useMapScript(locate.latitude, locate.longitude, true);
  const changeLocate = () => {
    setMapData(data.data);
  };
  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
      <div className={mapButton} onClick={changeLocate}>
        현위치에서 검색하기
      </div>
    </div>
  );
};
