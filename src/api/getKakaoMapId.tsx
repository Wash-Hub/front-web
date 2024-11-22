import axios from 'axios';
import { useQuery } from 'react-query';
import { KakaoMapId } from '../type';
import { errorState } from '../recoil/atoms/errorState';
import { useSetRecoilState } from 'recoil';

export const getKakaoMapId: KakaoMapId = (longitude, latitude, placeName) => {
  const setError = useSetRecoilState(errorState);
  const { data } = useQuery(
    ['data', longitude, latitude, placeName],
    () =>
      axios
        .get(
          `https://dapi.kakao.com/v2/local/search/keyword.json?y=${longitude}&x=${latitude}&radius=20000&query=${placeName}`,
          {
            headers: {
              Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_KEY}`,
              // KA: 'sdk/2.2.0 kakao.js/1.39.17 os/javascript lang/en-GB device/MacIntel origin/http%3A%2F%2Flocalhost%3A3000',
              KA: 'sdk/2.2.0 kakao.js/1.39.17 os/javascript lang/en-GB device/MacIntel origin/https%3A%2F%2Fwww.washhub.co.kr',
            },
          },
        )
        .then((res) => res.data),
    {
      retry: false,
      onError: (error) => {
        setError(error);
      },
    },
  );
  const id = data?.documents[0].id;

  return id;
};
