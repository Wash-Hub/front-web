import { useQuery } from 'react-query';
import { instanceJson } from './instanceJson';
import { useAxiosInterceptorsJson } from '../hooks/useAxiosInterceptors';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorState } from '../recoil/atoms/errorState';
import { myPagePaginationState } from '../recoil/atoms/myPageState';
export const getUserInfo = () => {
  const setError = useSetRecoilState(errorState);
  const content = useRecoilValue(myPagePaginationState);
  useAxiosInterceptorsJson();
  const { data } = useQuery(
    'info',
    async () => {
      const response = await instanceJson.get(`/auth/profile?page=${content.page}`);
      return response.data;
    },
    {
      retry: false,
      onError: (error) => {
        setError(error);
      },
    }
  );
  if (data === undefined) return undefined;
  return data?.data?.data;
};
