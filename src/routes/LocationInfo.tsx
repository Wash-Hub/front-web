import { getMapInfo } from '@/api/getMapInfo';
import { Info } from '@/components/LocationInfo/Info';
import { SidebarSmall } from '@/components/SideBar/SidebarSmall';
import { currentLocationAtom } from '@/recoil/atoms/mapState';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const LocationInfo = () => {
  const data = getMapInfo();
  const { id } = useParams<{ id: string }>();
  const [, setCurrentLocation] = useRecoilState(currentLocationAtom);
  useEffect(() => {
    if (id) {
      setCurrentLocation({ id });
    }
  }, [id]);
  return (
    <div>
      <SidebarSmall />
      <div className="absolute left-16 top-0 h-screen w-[360px] bg-white">
        <Info />
      </div>
    </div>
  );
};
