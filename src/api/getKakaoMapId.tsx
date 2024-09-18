import axios from 'axios';
import { useQuery } from 'react-query';
import { KakaoMapId } from '../type';

export const getKakaoMapId: KakaoMapId = (longitude, latitude, placeName) => {
  const { data } = useQuery('data', () =>
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?y=${longitude}&x=${latitude}&radius=20000&query=${placeName}`,
        {
          headers: {
            Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_KEY}`,
            KA: 'sdk/2.2.0 kakao.js/1.39.17 os/javascript lang/en-GB device/MacIntel origin/http%3A%2F%2Flocalhost%3A3000',
          },
        }
      )
      .then((res) => res.data)
  );
  const id = data?.documents[0].id;

  return id;
};
