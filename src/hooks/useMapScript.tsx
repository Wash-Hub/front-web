import { customoverlay, MapScript } from '../type';
import { useEffect } from 'react';
import { Infowindow } from '../components/map/infowindow/infowindow';
import { useOpen } from '../hooks/useOpen';
import { useRecoilValue } from 'recoil';
import { mapInfoAtom } from '../recoil/atoms/mapState';
import _ from 'lodash';

export const useMapScript: MapScript = (lat, lng, draggable = true) => {
  const { MenuControllMenu } = useOpen();
  const marker = useRecoilValue(mapInfoAtom);
  useEffect(() => {
    const container = document.getElementById('map')!;
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
    };

    const map = new kakao.maps.Map(container, options);
    draggable ? map.setDraggable(true) : map.setDraggable(false);
    let currentInfoWindow: customoverlay = null;
    const imageSrc = 'public/marker.png';
    const imageSize = new kakao.maps.Size(35, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    marker?.forEach((data) => {
      const mark = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.latitude, data.longitude),
        title: data.placeName,
        image: markerImage,
      });

      const content = Infowindow(data);
      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: new kakao.maps.LatLng(data.latitude, data.longitude),
        clickable: true,
      });

      kakao.maps.event.addListener(mark, 'click', function () {
        if (currentInfoWindow) {
          currentInfoWindow.setMap(null);
          currentInfoWindow = null;
        }
        overlay.setMap(map);
        currentInfoWindow = overlay;

        // 오버레이가 표시된 후 DOM 요소를 찾아 이벤트 리스너 추가
        setTimeout(() => {
          const element = document.getElementById(data.id);
          if (element) {
            element.addEventListener('click', () => {
              console.log('상세보기 클릭');
              MenuControllMenu();
            });
          } else {
            console.warn(`Element with ID ${data.id} not found`);
          }
        }, 0); // DOM이 렌더링된 후 바로 실행되도록 지연 시간 0 설정
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

    // kakao.maps.event.addListener(map, 'dragend', function () {
    //   debouncedUpdateLocate(map, locate, setLocate);
    // });
  }, [marker, lat, lng]);
};
