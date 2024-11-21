import { currentLocationAtom, mapInfoAtom, mapState } from '@/recoil/atoms/mapState';
import { useSetRecoilState } from 'recoil';

export const SearchContent = ({ item, index }: any) => {
  const setCurrentLocation = useSetRecoilState(currentLocationAtom);
  const setLocate = useSetRecoilState(mapState);
  const setMapData = useSetRecoilState(mapInfoAtom);
  const onClick = (id: string, latitude: number, longitude: number, item: any) => {
    setCurrentLocation({ id });
    setMapData([item]);
    setLocate({ latitude, longitude });
  };
  return (
    <div
      key={index}
      className="mx-[20px] my-1 flex w-[90%] cursor-pointer flex-row rounded-lg border border-gray-300 p-2"
      onClick={() => onClick(item.id, item.latitude, item.longitude, item)}
    >
      <img src={item.picture} alt="" className="h-[65px] w-[23%] rounded-lg" />
      <div className="ml-2 flex flex-col justify-center">
        <div className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">{item.placeName}</div>
        <div className="my-1 h-[20px] w-full overflow-hidden text-ellipsis whitespace-nowrap py-0 text-xs text-gray-400">
          {item.roadName}
        </div>
      </div>
    </div>
  );
};
