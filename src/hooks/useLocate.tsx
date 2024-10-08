import { useRecoilState, useSetRecoilState } from 'recoil';
import { mapState } from '../recoil/atoms/mapState';
import { location } from '../type';
import { errorState } from '../recoil/atoms/errorState';

export const useLocate = () => {
  const [locate, setLocate] = useRecoilState<location>(mapState);
  const setError = useSetRecoilState(errorState);
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
    setError('위치를 받아오는데 실패했습니다.');
    console.log('위치 받기 실패');
  }

  return locate;
};
