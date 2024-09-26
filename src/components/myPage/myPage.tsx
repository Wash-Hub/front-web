import { useEffect, useRef } from 'react';
import Modal from 'react-modal';
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
  profileEditModal,
} from './myPage.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRecoilState } from 'recoil';
import { myPagePaginationState, myPageState } from '../../recoil/atoms/myPageState';
import { dropdownRef, userInfo } from '../../type';
import { useLogout } from '../../hooks/useAuth';
import { getUserInfo } from '../../api/getUserInfo';
import { ClipLoader } from 'react-spinners';
import { loginSpinner } from '../login/kakao/kakaoRedirection.css';
import { Pagination } from '../pagination/mypage/paginationMypage';
import { ProfileEditModal } from './profileEditModal/profileEditModal';
export const MyPage = () => {
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
  const onClickLogout = () => {
    logout();
  };
  const onClickProfileEdit = () => {
    setIsOpen((prev) => ({ ...prev, isModalOpened: true }));
  };
  const [page] = useRecoilState(myPagePaginationState);
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
                  <div className={myPageProfileDropdownItem({ border: 'BorderBottom' })} onClick={onClickProfileEdit}>
                    프로필 수정
                  </div>
                  <div className={myPageProfileDropdownItem({ border: 'BorderTop' })} onClick={onClickLogout}>
                    로그아웃
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={myPageContent}>
            <div className={myPageContentTitle}>북마크 목록</div>
            {data.bookmark.map((item, index) => (
              <div key={index} className={myPageItemContent}>
                <img src={item.picture} alt="" className={myPageItemImg} />
                <div className={myPageItemContentTextContainer}>
                  <div className={myPageItemContentText}>{item.placeName}</div>
                  <div className={myPageItemAddress}>{item.roadName}</div>
                </div>
              </div>
            ))}
            <div>
              <Pagination totalPages={Math.ceil(data.bookmark.length / 5)} pageCount={5} currentPage={page.page} />
            </div>
          </div>
        </>
      )}
      {isOpen.isModalOpened && (
        <Modal
          ariaHideApp={false}
          isOpen={isOpen.isModalOpened}
          onRequestClose={() => setIsOpen((prev) => ({ ...prev, isModalOpened: false }))}
          shouldCloseOnEsc={false}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: profileEditModal.overlay,
            content: {
              ...profileEditModal.content,
              textAlign: profileEditModal.content.textAlign as React.CSSProperties['textAlign'],
            },
          }}
        >
          <ProfileEditModal name={data.name} email={data.email} />
        </Modal>
      )}
    </div>
  );
};
