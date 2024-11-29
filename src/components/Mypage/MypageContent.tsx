import { currentLocationAtom, mapInfoAtom, mapState } from '@/recoil/atoms/mapState';
import { userInfo } from '@/type';
import { useSetRecoilState } from 'recoil';
import { Pagination } from '../Pagination/PaginationMyPage';
import { useParams } from 'react-router-dom';

export const MypageContent = ({ data }: { data: userInfo }) => {
  const { page } = useParams();
  const setCurrentLocation = useSetRecoilState(currentLocationAtom);
  const setUpdateMapState = useSetRecoilState(mapState);
  const setMapData = useSetRecoilState(mapInfoAtom);
  const onClickDetail = (id: string, latitude: number, longitude: number, item: any) => {
    setCurrentLocation({ id });
    setMapData([item]);
    setUpdateMapState({ latitude, longitude });
  };
  return (
    <div className="flex h-full flex-col">
      <div className="px-4 text-lg font-semibold">북마크 목록</div>
      {data.bookmarks.data.map((item, index) => (
        <div
          key={index}
          className="my-2 ml-3 flex w-[90%] cursor-pointer flex-row items-center justify-start rounded-md border border-gray-200 bg-white p-2"
          onClick={() => onClickDetail(item.map.id, item.map.latitude, item.map.longitude, item.map)}
        >
          <img src={item.map.picture} alt="" className="h-[65px] w-[23%] rounded-md" />
          <div className="ml-3 flex flex-col justify-center">
            <div className="truncate text-sm font-bold">{item.map.placeName}</div>
            <div className="truncate text-xs text-gray-400">{item.map.roadName}</div>
          </div>
        </div>
      ))}
      <div>
        <Pagination totalPages={data.bookmarks.meta.pageCount} pageCount={5} currentPage={page} />
      </div>
    </div>
  );
};
