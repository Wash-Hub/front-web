import { Outlet } from 'react-router-dom';
import { KakaoMap } from '@/components/Map/Map';

export const Map = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-0 z-[0] h-full w-full">
        <KakaoMap />
        <div className="pointer-events-none absolute left-0 top-0 z-[10] h-full w-fit">
          <div className="pointer-events-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
