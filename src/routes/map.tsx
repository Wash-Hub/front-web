import { Map } from 'react-kakao-maps-sdk';
import { map } from '../styles/globalStyle.css';
import { useLocation } from '../hooks/useLocation';

export const KakaoMap = () => {
  // 현재 위치 정보 받아오기
  const location = useLocation() as { latitude: number; longitude: number };

  return (
    <div>
      {typeof location.latitude === 'undefined' && typeof location.latitude === 'undefined' ? (
        'loading...'
      ) : (
        <Map // 지도를 표시할 Container
          id="map"
          center={{
            // 지도의 중심좌표
            lat: location.latitude,
            lng: location.longitude,
          }}
          level={3} // 지도의 확대 레벨
          className={map}
        />
      )}
    </div>
  );
};
