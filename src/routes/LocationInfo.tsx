import { MenuContainer } from '@/components/Container/MenuContainer';
import { Info } from '@/components/LocationInfo/Info';
import { currentLocationAtom } from '@/recoil/atoms/mapState';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const LocationInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [, setCurrentLocation] = useRecoilState(currentLocationAtom);
  useEffect(() => {
    if (id) {
      setCurrentLocation({ id });
    }
  }, [id]);
  return (
    <MenuContainer>
      <Info />
    </MenuContainer>
  );
};
