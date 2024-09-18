import axios from 'axios';
import { useQuery } from 'react-query';
import { CONFIG } from '../../config';
import { location } from '../type';
import { currentLocationAtom } from '../recoil/atoms/mapState';
import { useRecoilValue } from 'recoil';

const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMapInfo = () => {
  const currentLocation = useRecoilValue(currentLocationAtom);
  if (currentLocation.id === '') return undefined;
  const { data } = useQuery(
    'mapInfo',
    async () => {
      const response = await instance.get(`/map/${currentLocation.id}`);
      return response.data;
    },
    {
      retry: false,
    }
  );

  if (data === undefined) return undefined;
  return data?.data?.map;
};

export const getMapAllInfo = (locate: location) => {
  const { data } = useQuery(
    ['mapAllInfo', locate],
    async () => {
      const response = await instance.get(`/map?x=${locate.longitude}&y=${locate.latitude}`);
      return response.data;
    },
    {
      enabled: locate.latitude !== 0 && locate.longitude !== 0,
      retry: false,
    }
  );
  if (!data) return [];
  return data;
};
