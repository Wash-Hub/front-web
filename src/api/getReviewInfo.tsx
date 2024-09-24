import { useRecoilValue } from 'recoil';
import { currentLocationAtom } from '../recoil/atoms/mapState';
import { useQuery } from 'react-query';
import axios from 'axios';
import { CONFIG } from '../../config';

const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getReviewInfo = () => {
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
  return data?.data?.reviews.data;
};
