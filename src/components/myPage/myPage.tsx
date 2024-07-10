import { useEffect, useRef } from 'react';
import { Search } from '../search/search';
import {
  myPageContainer,
  myPageContent,
  myPageContentTitle,
  myPageItemAddress,
  myPageItemContent,
  myPageItemContentText,
  myPageItemContentTextContainer,
  myPageItemImg,
  myPageProfile,
  myPageProfileDropdown,
  myPageProfileDropdownItem,
  myPageProfileIcon,
  myPageProfileIconContainer,
  myPageProfileImg,
  myPageSearch,
  myPageTop,
} from './myPage.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRecoilState } from 'recoil';
import { myPageState } from '../../recoil/atoms/myPageState';

export const MyPage = () => {
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
  const [isOpen, setIsOpen] = useRecoilState(myPageState);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  console.log(isOpen);
  const onClickMenu = () => {
    setIsOpen((prev) => ({ ...prev, isDropdownMenuOpened: !prev.isDropdownMenuOpened }));
  };
  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen((prev) => ({ ...prev, isDropdownMenuOpened: false }));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={myPageContainer}>
      <div className={myPageSearch}>
        <Search />
      </div>
      <div className={myPageTop}>
        <div className={myPageProfile}>
          <img src="public\icon_people_outline.webp" alt="" className={myPageProfileImg} />
          <div>익명</div>
        </div>
        <div className={myPageProfileIconContainer} ref={dropdownRef}>
          <RxHamburgerMenu className={myPageProfileIcon} onClick={onClickMenu} />
          {isOpen.isDropdownMenuOpened && (
            <div className={myPageProfileDropdown}>
              <div className={myPageProfileDropdownItem({ border: 'BorderBottom' })}>닉네임 수정하기</div>
              <div className={myPageProfileDropdownItem({ border: 'BorderTop' })}>로그아웃</div>
            </div>
          )}
        </div>
      </div>
      <div className={myPageContent}>
        <div className={myPageContentTitle}>북마크 목록</div>
        {dummy.map((item, index) => (
          <div key={index} className={myPageItemContent}>
            <img src={item.img} alt="" className={myPageItemImg} />
            <div className={myPageItemContentTextContainer}>
              <div className={myPageItemContentText}>{item.name}</div>
              <div className={myPageItemAddress}>{item.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
