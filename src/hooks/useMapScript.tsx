import { customoverlay, MapScript } from '../type';
import { useEffect } from 'react';
import { Infowindow } from '../components/map/infowindow/infowindow';
import { useOpen } from '../hooks/useOpen';
import { useRecoilState } from 'recoil';
import { mapState } from '../recoil/atoms/mapState';
import { debouncedUpdateLocate } from '../utils/debounceUpdateLotate';
import _ from 'lodash';

export const useMapScript: MapScript = (lat, lng, marker, draggable = true) => {
  const { MenuControllMenu } = useOpen();
  const [locate, setLocate] = useRecoilState(mapState);
  useEffect(() => {
    const container = document.getElementById('map')!;
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    draggable ? map.setDraggable(true) : map.setDraggable(false);
    let currentInfoWindow: customoverlay = null;
    const imageSrc = 'public/marker.png';
    const imageSize = new kakao.maps.Size(35, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    marker.forEach((data) => {
      const mark = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.lat, data.lng),
        title: data.title,
        image: markerImage,
      });

      const content = Infowindow(data);
      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new kakao.maps.LatLng(data.lat, data.lng),
        clickable: true,
      });

      kakao.maps.event.addListener(mark, 'click', function () {
        if (currentInfoWindow) {
          currentInfoWindow.setMap(null);
          currentInfoWindow = null;
        }
        overlay.setMap(map);
        currentInfoWindow = overlay;
      });

      document.getElementById(data.id)?.addEventListener('click', () => {
        MenuControllMenu();
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

    kakao.maps.event.addListener(map, 'dragend', function () {
      debouncedUpdateLocate(map, locate, setLocate);
    });
  }, [lat, lng, marker]);
};
