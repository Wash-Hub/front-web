import { useLocate } from '@/hooks/useLocate';
import { location } from '@/type';
import { useRecoilState } from 'recoil';
import { mapState } from '@/recoil/atoms/mapState';
import { useMapScript } from '@/hooks/useMapScript';
import { useMap } from '@/hooks/useMap';

export const KakaoMap = () => {
  const [locate] = useRecoilState<location>(mapState);
  useLocate();
  useMap(locate);
  useMapScript(locate.latitude, locate.longitude, true);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }} />
    </div>
  );
};
