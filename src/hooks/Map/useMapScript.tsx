import { customoverlay, MapScript, MiniMapScript } from '../../type';
import { useEffect, useRef } from 'react';
import { Infowindow } from '@/components/Infowindow/Infowindow';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLocationAtom, mapInfoAtom, mapInitializedAtom, mapState } from '../../recoil/atoms/mapState';
import _ from 'lodash';
import { debouncedUpdateLocate } from '../../utils/debounceUpdateLotate';
import { toast } from 'react-toastify';
import 'react-kakao-maps-sdk';
import { useNavigate } from 'react-router-dom';

export const useMapScript: MapScript = (lat, lng, draggable = true) => {
  const marker = useRecoilValue(mapInfoAtom);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [locate, setLocate] = useRecoilState(mapState);
  const [isMapInitialized, setIsMapInitialized] = useRecoilState(mapInitializedAtom);
  const [, setCurrentLocation] = useRecoilState(currentLocationAtom);
  const markersRef = useRef<kakao.maps.Marker[]>([]);
  const clustererRef = useRef<kakao.maps.MarkerClusterer | null>(null);
  const navigate = useNavigate();

  const removeMarkers = () => {
    if (markersRef.current.length > 0) {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];
    }

    if (clustererRef.current) {
      clustererRef.current.clear();
    }
  };

  useEffect(() => {
    if (!mapRef.current) {
      const container = document.getElementById('map')!;
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      mapRef.current = map;
      setIsMapInitialized(true);

      const mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }

    const map = mapRef.current;
    draggable ? map.setDraggable(true) : map.setDraggable(false);
    let currentInfoWindow: customoverlay = null;
    const imageSrc = '/marker.png';
    const imageSize = new kakao.maps.Size(35, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    if (!clustererRef.current) {
      clustererRef.current = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
        disableClickZoom: true,
      });
    }

    removeMarkers();

    const markers = marker?.map((data) => {
      const mark = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(data.latitude, data.longitude),
        title: data.placeName,
        image: markerImage,
      });

      markersRef.current.push(mark);

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
          const notifyError = () => toast('잠시후 다시 시도해주세요.');
          if (element) {
            element.addEventListener('click', () => {
              setCurrentLocation({ id: data.id });
              navigate(`/detail/${data.id}`);
            });
          } else {
            notifyError();
          }
        }, 0);
      });

      overlay.setMap(null);
      return mark;
    });

    clustererRef.current.addMarkers(markers);

    kakao.maps.event.addListener(map, 'click', function () {
      if (currentInfoWindow) {
        currentInfoWindow.setMap(null);
        currentInfoWindow = null;
      }
    });

    kakao.maps.event.addListener(clustererRef.current, 'clusterclick', function (cluster: any) {
      const level = map.getLevel() - 1;
      map.setLevel(level, { anchor: cluster.getCenter() });
    });

    kakao.maps.event.addListener(map, 'dragend', function () {
      debouncedUpdateLocate(map, locate, setLocate);
    });
  }, [marker, lat, lng]);

  useEffect(() => {
    if (isMapInitialized && mapRef.current) {
      const map = mapRef.current;
      map.panTo(new kakao.maps.LatLng(lat, lng));
    }
  }, [lat, lng, isMapInitialized]);
};

export const useMiniMapScript: MiniMapScript = (lat, lng) => {
  const marker = useRecoilValue(mapInfoAtom);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [isMapInitialized, setIsMapInitialized] = useRecoilState(mapInitializedAtom);

  useEffect(() => {
    if (!mapRef.current) {
      const container = document.getElementById('miniMap')!;
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
      };
      const map = new kakao.maps.Map(container, options);
      mapRef.current = map;
      setIsMapInitialized(true);
    }

    const map = mapRef.current;

    map.setDraggable(false);
    const imageSrc = '/marker.png';
    const imageSize = new kakao.maps.Size(35, 35);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

    marker?.forEach((data) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.latitude, data.longitude),
        title: data.placeName,
        image: markerImage,
      });
    });
  }, []);

  useEffect(() => {
    if (isMapInitialized && mapRef.current) {
      const map = mapRef.current;
      map.panTo(new kakao.maps.LatLng(lat, lng));
    }
  }, [isMapInitialized]);
};
