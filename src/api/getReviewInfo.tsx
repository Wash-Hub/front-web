import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentLocationAtom } from '../recoil/atoms/mapState';
import { useQuery } from 'react-query';
import { instanceJson } from './instanceJson';
import { errorState } from '../recoil/atoms/errorState';

export const getReviewInfo = () => {
  const setError = useSetRecoilState(errorState);
  const currentLocation = useRecoilValue(currentLocationAtom);
  if (currentLocation.id === '') return undefined;
  const { data } = useQuery(
    ['mapInfo', currentLocation.id],
    async () => {
      const response = await instanceJson.get(`/map/${currentLocation.id}`);
      return response.data;
    },
    {
      retry: false,
      onError: (error) => {
        setError(error);
      },
    },
  );

  if (data === undefined) return undefined;
  return data?.data?.reviews.data;
};
