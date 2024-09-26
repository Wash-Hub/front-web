import { useQuery } from 'react-query';
import { searchState } from '../recoil/atoms/searchState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { CONFIG } from '../../config';
import { errorState } from '../recoil/atoms/errorState';

const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getSearchInfo = () => {
  const content = useRecoilValue(searchState);
  const setError = useSetRecoilState(errorState);
  if (content.contents === '') return [];
  const { data } = useQuery(
    'search',
    async () => {
      const response = await instance.get(`/map/search?title=${content.contents}&page=${content.page}`);
      return response.data;
    },
    {
      retry: false,
      onError: (error) => {
        setError(error);
      },
    }
  );
  if (data === undefined) return [];
  const result = [data.data.meta.pageCount, ...data.data.data];
  return result;
};
