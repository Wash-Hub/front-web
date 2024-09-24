import { useQuery } from 'react-query';
import { instanceJson } from './instanceJson';
import { useAxiosInterceptorsJson } from '../hooks/useAxiosInterceptors';

export const getUserInfo = () => {
  useAxiosInterceptorsJson();
  const { data } = useQuery(
    'info',
    async () => {
      const response = await instanceJson.get(`/auth/profile/`);
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
  return data?.data?.data;
};
