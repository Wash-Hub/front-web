import { useQuery } from 'react-query';
import { location } from '../type';
import { currentLocationAtom } from '../recoil/atoms/mapState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { instanceJson } from './instanceJson';
import axios from 'axios';
import { CONFIG } from '../../config';
import { errorState } from '../recoil/atoms/errorState';

export const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMapInfo = () => {
  const currentLocation = useRecoilValue(currentLocationAtom);
  const setError = useSetRecoilState(errorState);
  if (currentLocation.id === '') return undefined;
  const { data } = useQuery(
    'mapInfo',
    async () => {
      const response = await instanceJson.get(`/map/${currentLocation.id}`);
      return response.data;
    },
    {
      onError: (error) => {
        setError(error);
      },
      retry: false,
    }
  );
  if (data === undefined) return undefined;
  return data?.data?.map;
};

export const getMapAllInfo = (locate: location) => {
  const setError = useSetRecoilState(errorState);
  const { data } = useQuery(
    ['mapAllInfo', locate],
    async () => {
      const response = await instance.get(`/map?x=${locate.longitude}&y=${locate.latitude}`);
      return response.data;
    },
    {
      enabled: locate.latitude !== 0 && locate.longitude !== 0,
      retry: false,
      onError: (error) => {
        setError(error);
      },
    }
  );
  if (!data) return [];
  return data;
};
