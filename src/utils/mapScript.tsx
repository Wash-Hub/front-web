import { MapScript } from '../type';

export const mapScript: MapScript = (lat, lng, marker) => {
  const container = document.getElementById('map')!;
  const options = {
    center: new window.kakao.maps.LatLng(lat, lng),
    level: 3,
  };
  const map = new window.kakao.maps.Map(container, options);
  marker.forEach((data) => {
    new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(data.lat, data.lng),
      title: data.title,
    });
  });
};
