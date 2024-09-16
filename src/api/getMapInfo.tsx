import axios from 'axios';
import { useQuery } from 'react-query';
import { CONFIG } from '../../config';
import { location } from '../type';

const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMapInfo = (id: string) => {
  if (id === '') return undefined;
  const { data } = useQuery(
    'mapInfo',
    async () => {
      const response = await instance.get(`/map/${id}`);
      return response.data;
    },
    {
      retry: false,
      onError: () => {
        alert('데이터를 불러오는데 실패하였습니다. 다시 시도해주세요.');
      },
    }
  );

  if (data === undefined) return undefined;
  return data?.data?.map;
};

export const getMapAllInfo = (locate: location) => {
  const { data } = useQuery(
    ['mapAllInfo', locate],
    async () => {
      const response = await instance.get(`/map?x=${locate.latitude}&y=${locate.longitude}`);
      return response.data;
    },
    {
      enabled: locate.latitude !== 0 && locate.longitude !== 0,
      retry: false,
    }
  );

  if (!data) return undefined;
  return data;
};
