import { useRecoilState } from 'recoil';
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
import { sidebarState } from '../../../recoil/atoms/sidebarState';
import { menuState, reviewState } from '../../../recoil/atoms/menuState';

export const SearchDetail = () => {
  const dummy = [
    {
      img: 'public/test.jpg',
      name: '코인세탁소',
      address: '서울특별시 양천구 신정로 11길',
    },
    {
      img: 'public/test.jpg',
      name: '코인세탁소',
      address: '서울특별시 양천구 신정로 11길',
    },
    {
      img: 'public/test.jpg',
      name: '코인세탁소',
      address: '서울특별시 양천구 신정로 11길',
    },
  ];

  const [, setIsActiveSearch] = useRecoilState(sidebarState);
  const [, setIsOpened] = useRecoilState(menuState);
  const [, setReview] = useRecoilState(reviewState);
  const onClick = (title: string) => {
    setIsOpened((prevState) => ({ ...prevState, isOpened: !prevState.isOpened }));
    setIsActiveSearch((prevState) => ({ ...prevState, isActiveSearch: !prevState.isActiveSearch }));
    setReview({ isOpened: false });
  };
  return (
    <div className={searchDetailContainer}>
      <div className={searchDetailSearch}>
        <Search />
      </div>
      <div className={searchDetailItem}>
        <div className={searchDetailItemTitle}>검색결과</div>
        {dummy.map((item, index) => (
          <div key={index} className={searchDetailItemContent} onClick={() => onClick(item.name)}>
            <img src={item.img} alt="" className={searchDetailItemImg} />
            <div className={searchDetailItemContentTextContainer}>
              <div className={searchDetailItemContentText}>{item.name}</div>
              <div className={searchDetailItemAddress}>{item.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
