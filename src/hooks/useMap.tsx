import { useRecoilValueLoadable } from 'recoil';
import { getMapDataAtom } from '../recoil/atoms/mapState';
import { useEffect } from 'react';

export const useMap = () => {
  const mapDataLoadable = useRecoilValueLoadable(getMapDataAtom);
  useEffect(() => {
    if (mapDataLoadable.state === 'loading') {
      console.log('loading');
    } else if (mapDataLoadable.state === 'hasValue') {
      console.log(mapDataLoadable.contents, mapDataLoadable);
    } else if (mapDataLoadable.state === 'hasError') {
      console.error('Error:', mapDataLoadable.contents);
    }
  }, [mapDataLoadable]);

  return mapDataLoadable.contents;
};
