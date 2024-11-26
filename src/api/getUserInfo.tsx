import { useQuery } from 'react-query';
import { instanceJson } from './instanceJson';
import { useAxiosInterceptorsJson } from '../hooks/Auth/useAxiosInterceptors';
import { useSetRecoilState } from 'recoil';
import { errorState } from '../recoil/atoms/errorState';
import { useParams } from 'react-router-dom';

export const getUserInfo = () => {
  const setError = useSetRecoilState(errorState);
  const { page } = useParams();
  const currentPage = page ?? '1';
  const queryKey = ['info', currentPage];

  useAxiosInterceptorsJson();

  const { data } = useQuery(
    queryKey,
    async () => {
      const response = await instanceJson.get(`/auth/profile?page=${currentPage}`);
      return response.data;
    },
    {
      enabled: !!currentPage,
      onError: (error) => {
        setError(error);
      },
    },
  );

  if (!data) return undefined;
  return data?.data?.data;
};
