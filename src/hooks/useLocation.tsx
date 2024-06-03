import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { mapState } from '../recoil/atoms/mapState';

export const useLocation = () => {
  const [location, setLocation] = useRecoilState<{ latitude: number; longitude: number }>(mapState);
  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      console.log('위치 받기 실패');
    }
  }, [navigator.geolocation.getCurrentPosition]);

  return location;
};
