import { customoverlay, MapScript } from '../type';
import { useEffect, useRef, useState } from 'react';
import { Infowindow } from '../components/map/infowindow/infowindow';
import { useOpen } from '../hooks/useOpen';
import { useRecoilState, useRecoilValue } from 'recoil';
import { mapInfoAtom, mapState } from '../recoil/atoms/mapState';
import _ from 'lodash';
import { debouncedUpdateLocate } from '../utils/debounceUpdateLotate';

export const useMapScript: MapScript = (lat, lng, draggable = true) => {
  const { MenuControllMenu } = useOpen();
  const marker = useRecoilValue(mapInfoAtom);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [locate, setLocate] = useRecoilState(mapState);
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  useEffect(() => {
    if (!mapRef.current) {
      const container = document.getElementById('map')!;
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
      };
      const map = new kakao.maps.Map(container, options);
      mapRef.current = map; // 지도 객체를 저장하여 재사용
      setIsMapInitialized(true);
    }

    const map = mapRef.current;

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
        }, 0);
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
  }, [marker, lat, lng]);

  useEffect(() => {
    if (isMapInitialized && mapRef.current) {
      const map = mapRef.current;
      map.panTo(new kakao.maps.LatLng(lat, lng)); // 중심 좌표 부드럽게 이동
    }
  }, [lat, lng, isMapInitialized]);
};
