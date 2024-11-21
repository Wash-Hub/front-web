import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { CONFIG } from '../../config';
import { errorState } from '../recoil/atoms/errorState';
import { useParams } from 'react-router-dom';

const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSearchInfo = () => {
  const setError = useSetRecoilState(errorState);
  const { title, page } = useParams();
  if (title === '') return [];
  const { data } = useQuery(
    ['search', title, page],
    async () => {
      const response = await instance.get(`/map/search?title=${title}&page=${page}`);
      return response.data;
    },
    {
      onError: (error) => {
        setError(error);
      },
    },
  );
  if (data === undefined) return [];
  const result = [data.data.meta.pageCount, ...data.data.data];
  return result;
};
