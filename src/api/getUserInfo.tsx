import { useQuery } from 'react-query';
import { instanceJson } from './instanceJson';
import { useAxiosInterceptorsJson } from '../hooks/Auth/useAxiosInterceptors';
import { useSetRecoilState } from 'recoil';
import { errorState } from '../recoil/atoms/errorState';
import { useParams } from 'react-router-dom';
export const getUserInfo = () => {
  const setError = useSetRecoilState(errorState);
  const { page } = useParams();
  useAxiosInterceptorsJson();
  const { data } = useQuery(
    ['info', page],
    async () => {
      if (!page) {
        const response = await instanceJson.get('/auth/profile?page=1');
        return response.data;
      } else {
        const response = await instanceJson.get(`/auth/profile?page=${page}`);
        return response.data;
      }
    },
    {
      retry: false,
      onError: (error) => {
        setError(error);
      },
    },
  );
  if (data === undefined) return undefined;
  return data?.data?.data;
};
