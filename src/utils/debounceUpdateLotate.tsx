import _ from 'lodash';
import { debounce } from '../type';

export const debouncedUpdateLocate: debounce = _.debounce((map, locate, setLocate) => {
  const bounds = map.getBounds();
  const swLatLng = bounds.getSouthWest();
  const neLatLng = bounds.getNorthEast();

  console.log(swLatLng.getLat(), neLatLng.getLat());

  const newLatitude = (swLatLng.getLat() + neLatLng.getLat()) / 2;
  const newLongitude = (swLatLng.getLng() + neLatLng.getLng()) / 2;

  if (
    locate.latitude.toFixed(3) !== newLatitude.toFixed(3) &&
    locate.longitude.toFixed(3) !== newLongitude.toFixed(3)
  ) {
    setLocate({
      latitude: newLatitude,
      longitude: newLongitude,
    });
  }
}, 100); // 100ms 지연 후 실행