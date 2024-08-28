import _ from 'lodash';

export const debouncedUpdateLocate = _.debounce((map: any, locate: any, setLocate: any) => {
  const bounds = map.getBounds();
  const swLatLng = bounds.getSouthWest();
  const neLatLng = bounds.getNorthEast();

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
}, 200); // 200ms 지연 후 실행
