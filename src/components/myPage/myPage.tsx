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
import { dropdownRef, userInfo } from '../../type';
import { useLogout } from '../../hooks/useAuth';
import { getUserInfo } from '../../api/getUserInfo';
import { ClipLoader } from 'react-spinners';
import { loginSpinner } from '../login/kakao/kakaoRedirection.css';
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
  const dropdownRef = useRef<dropdownRef>(null);
  const onClickMenu = () => {
    setIsOpen((prev) => ({ ...prev, isDropdownMenuOpened: !prev.isDropdownMenuOpened }));
  };
  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen((prev) => ({ ...prev, isDropdownMenuOpened: false }));
    }
  };
  const logout = useLogout();

  const onClick = () => {
    logout();
  };

  const data: userInfo = getUserInfo();
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
      {data === undefined ? (
        <div className={loginSpinner}>
          <ClipLoader color="#36d7b7" loading={true} size={50} />
        </div>
      ) : (
        <>
          <div className={myPageTop}>
            <div className={myPageProfile}>
              <img src={data.profileImg} alt="" className={myPageProfileImg} />
              <div>{data.nickname} 님</div>
            </div>
            <div className={myPageProfileIconContainer} ref={dropdownRef}>
              <RxHamburgerMenu className={myPageProfileIcon} onClick={onClickMenu} />
              {isOpen.isDropdownMenuOpened && (
                <div className={myPageProfileDropdown}>
                  <div className={myPageProfileDropdownItem({ border: 'BorderBottom' })}>닉네임 수정하기</div>
                  <div className={myPageProfileDropdownItem({ border: 'BorderTop' })} onClick={onClick}>
                    로그아웃
                  </div>
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
        </>
      )}
    </div>
  );
};
