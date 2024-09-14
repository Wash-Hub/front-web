import { useQuery } from 'react-query';
import { instance } from './instance';

export const getUserInfo = () => {
  const { data } = useQuery(
    'info',
    async () => {
      const response = await instance.get(`/auth/profile/`);
      return response.data;
    },
    {
      retry: false,
      onError: (error) => {
        console.log(error);
        alert('데이터를 불러오는데 실패하였습니다. 다시 시도해주세요.');
      },
    }
  );
  console.log(data);
  if (data === undefined) return undefined;
  return data?.data?.data;
};
