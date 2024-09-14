import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { getMapDataAtom, mapInfoAtom } from '../recoil/atoms/mapState';
import { useEffect } from 'react';

export const useMap = () => {
  const mapDataLoadable = useRecoilValueLoadable(getMapDataAtom);
  const setMapData = useSetRecoilState(mapInfoAtom);
  useEffect(() => {
    if (mapDataLoadable.state === 'loading') {
      console.log('loading');
    } else if (mapDataLoadable.state === 'hasValue') {
      console.log(mapDataLoadable.contents, mapDataLoadable);
      setMapData(mapDataLoadable.contents.data);
    } else if (mapDataLoadable.state === 'hasError') {
      console.error('Error:', mapDataLoadable.contents);
    }
  }, [mapDataLoadable]);

  return mapDataLoadable.contents;
};
