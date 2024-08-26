import { useEffect } from 'react';
import { useLocate } from '../../hooks/useLocate';
import { location } from '../../type';
import { useRecoilState } from 'recoil';
import { mapState } from '../../recoil/atoms/mapState';
import { mapScript } from '../../utils/mapScript';
import { mapButton } from './map.css';

export const KakaoMap = () => {
  const markerTestData = [
    {
      lat: 37.5062528,
      lng: 126.8379591,
      title: '코인세탁소',
      review: ['1', '2', '3'],
      address: '서울특별시 양천구',
    },
    {
      lat: 37.5072528,
      lng: 126.8379591,
      title: '코인세탁소',
      review: ['1', '2', '3'],
      address: '서울특별시 양천구',
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
      <div className={mapButton}>현위치에서 검색하기</div>
    </div>
  );
};
