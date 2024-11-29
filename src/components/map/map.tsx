import { useLocate } from '@/hooks/Map/useLocate';
import { location } from '@/type';
import { useRecoilState } from 'recoil';
import { mapState } from '@/recoil/atoms/mapState';
import { useMapScript } from '@/hooks/Map/useMapScript';

export const KakaoMap = () => {
  const [locate] = useRecoilState<location>(mapState);
  useLocate();
  useMapScript(locate.latitude, locate.longitude, true);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};
