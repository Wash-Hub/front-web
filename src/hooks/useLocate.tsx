import { useRecoilState } from 'recoil';
import { mapState } from '../recoil/atoms/mapState';
import { location } from '../type';

export const useLocate = () => {
  const [locate, setLocate] = useRecoilState<location>(mapState);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position: { coords: location }) {
    if (locate.latitude === 0 && locate.longitude === 0) {
      setLocate({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
  }

  function error() {
    console.log('위치 받기 실패');
  }

  return locate;
};
