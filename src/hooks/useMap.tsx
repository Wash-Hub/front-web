import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { getMapDataAtom, mapInfoAtom } from '../recoil/atoms/mapState';
import { useEffect } from 'react';

export const useMap = () => {
  const mapDataLoadable = useRecoilValueLoadable(getMapDataAtom);
  const setMapData = useSetRecoilState(mapInfoAtom);
  useEffect(() => {
    if (mapDataLoadable.state === 'loading') {
    } else if (mapDataLoadable.state === 'hasValue') {
      setMapData(mapDataLoadable.contents.data);
    } else if (mapDataLoadable.state === 'hasError') {
      alert('지도 데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [mapDataLoadable]);

  return mapDataLoadable.contents;
};
