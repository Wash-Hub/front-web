import { Infowindow } from '../components/map/infowindow/infowindow';
import { MapScript } from '../type';

export const mapScript: MapScript = (lat, lng, marker) => {
  const container = document.getElementById('map')!;

  const options = {
    center: new window.kakao.maps.LatLng(lat, lng),
    level: 3,
  };

  const map = new window.kakao.maps.Map(container, options);

  let currentInfoWindow: kakao.maps.CustomOverlay | null = null;
  const imageSrc = 'public/marker.png',
    imageSize = new window.kakao.maps.Size(35, 35);

  const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

  marker.forEach((data) => {
    const mark = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(data.lat, data.lng),
      title: data.title,
      image: markerImage,
    });
    const content = Infowindow(data);

    const overlay = new window.kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: new window.kakao.maps.LatLng(data.lat, data.lng),
    });

    window.kakao.maps.event.addListener(mark, 'click', function () {
      if (currentInfoWindow) {
        currentInfoWindow.setMap(null);
        currentInfoWindow = null;
      }
      overlay.setMap(map);
      currentInfoWindow = overlay;
    });

    overlay.setMap(null);
  });

  // 지도 클릭 시 인포윈도우 닫기
  kakao.maps.event.addListener(map, 'click', function () {
    if (currentInfoWindow) {
      currentInfoWindow.setMap(null);
      currentInfoWindow = null;
    }
  });
};
