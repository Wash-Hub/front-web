import { Search } from '../search';
import {
  searchDetailContainer,
  searchDetailItem,
  searchDetailItemAddress,
  searchDetailItemContent,
  searchDetailItemContentText,
  searchDetailItemContentTextContainer,
  searchDetailItemImg,
  searchDetailItemTitle,
  searchDetailSearch,
} from './searchDetail.css';
import { getSearchInfo } from '../../../api/getSearchInfo';
import { useOpen } from '../../../hooks/useOpen';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentLocationAtom, mapInfoAtom, mapState } from '../../../recoil/atoms/mapState';

import { Pagination } from '../../pagination/pagination';
import { searchState } from '../../../recoil/atoms/searchState';
import { paginationScrollbar } from '../../pagination/pagination.css';

export const SearchDetail = () => {
  let data = getSearchInfo();
  const total = data[0];
  data = data.slice(1);
  const { MenuControlldetail } = useOpen();
  const setCurrentLocation = useSetRecoilState(currentLocationAtom);
  const setLocate = useSetRecoilState(mapState);
  const setMapData = useSetRecoilState(mapInfoAtom);
  const onClick = (id: string, latitude: number, longitude: number, item: any) => {
    setCurrentLocation({ id });
    setMapData([item]);
    setLocate({ latitude, longitude });
    MenuControlldetail();
  };
  const [page] = useRecoilState(searchState);
  return (
    <div className={searchDetailContainer}>
      <div className={searchDetailSearch}>
        <Search />
      </div>
      <div className={`${searchDetailItem} ${paginationScrollbar}`}>
        <div className={searchDetailItemTitle}>검색결과</div>
        {data.length === 0 ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          <div>
            {data.map((item: any, index: any) => (
              <div
                key={index}
                className={searchDetailItemContent}
                onClick={() => onClick(item.id, item.latitude, item.longitude, item)}
              >
                <img src={item.picture} alt="" className={searchDetailItemImg} />
                <div className={searchDetailItemContentTextContainer}>
                  <div className={searchDetailItemContentText}>{item.placeName}</div>
                  <div className={searchDetailItemAddress}>{item.roadName}</div>
                </div>
              </div>
            ))}
            <div>
              <Pagination totalPages={total} pageCount={5} currentPage={page.page} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
