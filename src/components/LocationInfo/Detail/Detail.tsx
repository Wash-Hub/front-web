import { getKakaoMapId } from '@/api/getKakaoMapId';
import { useLocate } from '@/hooks/useLocate';
import { useMiniMapScript } from '@/hooks/useMapScript';
import { RiMapPin2Line } from 'react-icons/ri';

export const Detail = (mapData: any) => {
  mapData = mapData.mapData;
  useMiniMapScript(mapData.latitude, mapData.longitude);
  useLocate();
  const id = getKakaoMapId(mapData.longitude, mapData.latitude, mapData.placeName);
  const onClickMap = () => {
    window.open(`https://place.map.kakao.com/${id}`);
  };
  return (
    <div className="box-border flex h-full w-full flex-col p-5 pb-0">
      <div className="h-[150px] w-full rounded-[30px] object-cover" id="miniMap" />
      <div>
        <div className="mt-[15px] flex w-full items-center justify-start">
          <div className="mr-[10px] text-[20px]">
            <RiMapPin2Line />
          </div>
          <div className="text-start text-[14px] font-bold">{mapData.roadName}</div>
        </div>
        <div>
          <button
            onClick={onClickMap}
            className="mt-[15px] flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[10px] border border-[#e0e0e0] bg-[#04befe] text-[16px] text-white transition-all duration-300 hover:bg-[#0056b3]"
          >
            카카오 맵으로 보기
          </button>
        </div>
      </div>
    </div>
  );
};
