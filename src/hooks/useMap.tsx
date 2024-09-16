import { useSetRecoilState } from 'recoil';
import { mapInfoAtom } from '../recoil/atoms/mapState';
import { useEffect } from 'react';
import { getMapAllInfo } from '../api/getMapInfo';
import { location } from '../type';

export const useMap = (locate: location) => {
  const setMapData = useSetRecoilState(mapInfoAtom);
  const data = getMapAllInfo(locate);
  useEffect(() => {
    if (data.data) {
      setMapData(data.data);
    }
  }, [setMapData]);
};
