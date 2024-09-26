import { useQuery } from 'react-query';
import { instanceJson } from './instanceJson';
import { useAxiosInterceptorsJson } from '../hooks/useAxiosInterceptors';
import { useSetRecoilState } from 'recoil';
import { errorState } from '../recoil/atoms/errorState';

export const getUserInfo = () => {
  const setError = useSetRecoilState(errorState);
  useAxiosInterceptorsJson();
  const { data } = useQuery(
    'info',
    async () => {
      const response = await instanceJson.get(`/auth/profile/`);
      return response.data;
    },
    {
      retry: false,
      onError: (error) => {
        console.error(error);
        setError(error);
      },
    }
  );
  if (data === undefined) return undefined;
  return data?.data?.data;
};
