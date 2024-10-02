import { useLocate } from '../../hooks/useLocate';
import { location } from '../../type';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mapInfoAtom, mapState, screenSizeState } from '../../recoil/atoms/mapState';
import { useMapScript } from '../../hooks/useMapScript';
import { mapButton } from './map.css';
import { useMap } from '../../hooks/useMap';
import { getMapAllInfo } from '../../api/getMapInfo';
import { IoMdLocate } from 'react-icons/io';
import { useEffect } from 'react';

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
  const [isSmallScreen, setIsSmallScreen] = useRecoilState(screenSizeState);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen({ isSmallScreen: window.innerWidth < 768 });
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: window.innerWidth > 768 ? '100vh' : '93vh' }} />
      <div className={mapButton} onClick={changeLocate}>
        {isSmallScreen.isSmallScreen ? <IoMdLocate /> : '현위치에서 검색하기'}
      </div>
    </div>
  );
};
