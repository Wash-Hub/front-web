import { useEffect } from 'react';
import { useLocate } from '../../hooks/useLocate';
import { location } from '../../type';
import { useRecoilState } from 'recoil';
import { mapState } from '../../recoil/atoms/mapState';
import { mapScript } from '../../utils/mapScript';

export const KakaoMap = () => {
  const markerTestData = [
    {
      lat: 37.5062528,
      lng: 126.8379591,
      title: 'test1',
    },
    {
      lat: 37.5072528,
      lng: 126.8379591,
      title: 'test3',
    },
  ];
  // 현재 위치 정보 받아오기
  const [locate] = useRecoilState<location>(mapState);
  useLocate();
  useEffect(() => {
    mapScript(locate.latitude, locate.longitude, markerTestData);
  }, [locate]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};
