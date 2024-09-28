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
import { useRecoilState, useSetRecoilState } from 'recoil';
import { myPagePaginationState, myPageState } from '../../recoil/atoms/myPageState';
import { dropdownRef, userInfo } from '../../type';
import { useLogout } from '../../hooks/useAuth';
import { getUserInfo } from '../../api/getUserInfo';
import { ClipLoader } from 'react-spinners';
import { loginSpinner } from '../login/kakao/kakaoRedirection.css';
import { Pagination } from '../pagination/mypage/paginationMypage';
import { ProfileEditModal } from './profileEditModal/profileEditModal';
import { useOpen } from '../../hooks/useOpen';
import { currentLocationAtom, mapInfoAtom, mapState } from '../../recoil/atoms/mapState';

import { ToastContainer } from 'react-toastify';
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
  const { MenuControlldetail } = useOpen();
  const setCurrentLocation = useSetRecoilState(currentLocationAtom);
  const setLocate = useSetRecoilState(mapState);
  const setMapData = useSetRecoilState(mapInfoAtom);
  const onClickDetail = (id: string, latitude: number, longitude: number, item: any) => {
    setCurrentLocation({ id });
    setMapData([item]);
    setLocate({ latitude, longitude });
    MenuControlldetail();
  };
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
              <img src={data.profile.profileImg} alt="" className={myPageProfileImg} />
              <div>{data.profile.name} 님</div>
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
            {data.bookmarks.data.map((item, index) => (
              <div
                key={index}
                className={myPageItemContent}
                onClick={() => onClickDetail(item.map.id, item.map.latitude, item.map.longitude, item.map)}
              >
                <img src={item.map.picture} alt="" className={myPageItemImg} />
                <div className={myPageItemContentTextContainer}>
                  <div className={myPageItemContentText}>{item.map.placeName}</div>
                  <div className={myPageItemAddress}>{item.map.roadName}</div>
                </div>
              </div>
            ))}
            <div>
              <Pagination totalPages={data.bookmarks.meta.pageCount} pageCount={5} currentPage={page.page} />
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
          <ProfileEditModal name={data.profile.name} email={data.profile.email} />
        </Modal>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
    </div>
  );
};
