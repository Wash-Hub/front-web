import { MapScript } from '../type';
import { useEffect } from 'react';
import { Infowindow } from '../components/map/infowindow/infowindow';
import { useOpen } from '../hooks/useOpen';
import { useRecoilState } from 'recoil';
import { mapState } from '../recoil/atoms/mapState';
import { debouncedUpdateLocate } from '../utils/debounceUpdateLotate';

export const useMapScript: MapScript = (lat, lng, marker) => {
  const { MenuControllMenu } = useOpen();
  const [locate, setLocate] = useRecoilState(mapState);
  useEffect(() => {
    const container = document.getElementById('map')!;
    const options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);
    let currentInfoWindow: kakao.maps.CustomOverlay | null = null;
    const imageSrc = 'public/marker.png';
    const imageSize = new window.kakao.maps.Size(35, 35);
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
        clickable: true,
      });

      window.kakao.maps.event.addListener(mark, 'click', function () {
        if (currentInfoWindow) {
          currentInfoWindow.setMap(null);
          currentInfoWindow = null;
        }
        overlay.setMap(map);
        currentInfoWindow = overlay;
      });

      document.addEventListener('click', function (event) {
        const target = event.target as HTMLElement;
        if (target && target.id === data.id) {
          MenuControllMenu();
          console.log('click');
        }
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

    kakao.maps.event.addListener(map, 'bounds_changed', function () {
      debouncedUpdateLocate(map, locate, setLocate);
    });
  }, [lat, lng, marker]);
};
