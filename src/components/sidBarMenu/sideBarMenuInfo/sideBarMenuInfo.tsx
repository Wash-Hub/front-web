import { GoBookmark } from 'react-icons/go';
import { GoBookmarkFill } from 'react-icons/go';
import {
  sidebarMenuBookmark,
  sidebarMenuImg,
  sidebarMenuInfo,
  sidebarMenuInfoAddress,
  sidebarMenuInfoDetail,
  sidebarMenuInfoDetailItem,
  sidebarMenuInfoLoading,
  sidebarMenuInfoTitle,
} from './sideBarMenuInfo.css';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../../../recoil/atoms/sidebarState';
import { SideBarMenuInfoDetail } from './sideBarMenuInfoDetail/sideBarMenuInfoDetail';
import { SideBarMenuInfoReview } from './sideBarMenuInfoReview/sideBarMenuInfoReview';
import { CreateReview } from './sideBarMenuInfoReview/createReview/createReview';
import { loginModalState, loginState } from '../../../recoil/atoms/loginState';
import Modal from 'react-modal';
import { SelectLogin } from '../../login/selecktLogin/selectLogin';
import { loginModal } from '../../../styles/globalStyle.css';
import { useOpen } from '../../../hooks/useOpen';
import { reviewState } from '../../../recoil/atoms/reviewState';
import { getMapInfo } from '../../../api/getMapInfo';
import { closeModal } from './sideBarMenuInfoReview/createReview/createReview.css';
import { AlertModal } from './sideBarMenuInfoReview/createReview/alertModal/alertModal';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAxiosInterceptorsJson } from '../../../hooks/useAxiosInterceptors';
import { useBookmark } from '../../../hooks/useMutationApi';
export const SideBarMenuInfo = () => {
  useAxiosInterceptorsJson();
  const [isActiveDetail] = useRecoilState(sidebarState);
  const [isActiveReview] = useRecoilState(sidebarState);
  const [review] = useRecoilState(reviewState);
  const { MenuControllDetail, MenuControllReview, Close, MenuControlldetail } = useOpen();
  const onClickDetail = () => {
    MenuControllDetail();
  };
  const onClickReview = () => {
    MenuControllReview();
  };
  const [isModalOpen, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  const [isCreateReviewModalOpen, setCreateReviewModalOpen] = useRecoilState(reviewState); // 리뷰 모달 상태
  const data = getMapInfo();
  const handleOutsideClick = (event: MouseEvent) => {
    if (review.isOpened && login.isLogin) {
      const createReviewElement = document.getElementById('createReview');
      if (createReviewElement && !createReviewElement.contains(event.target as Node)) {
        setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: true }));
      }
    }
  };
  const { createBookmark, cancelBookmark } = useBookmark(
    { mapId: data },
    {
      onOpenModal: () => setIsModalOpen({ isModalOpen: true }),
      onClose: Close,
      onUpdateMenuDetail: MenuControlldetail,
    }
  );
  const onClickCreateBookmark = () => {
    createBookmark();
  };
  const onClickCancleBookmark = () => {
    cancelBookmark();
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [review.isOpened, login.isLogin]);

  return (
    <div>
      {data === undefined ? (
        <div className={sidebarMenuInfoLoading}>열람할 정보를 선택해주세요</div>
      ) : (
        <div>
          <img src={data.picture} alt="" className={sidebarMenuImg} />
          <div className={sidebarMenuInfo}>
            <div>
              <div className={sidebarMenuInfoTitle}>{data.placeName}</div>
              <div className={sidebarMenuInfoAddress}>{data.roadName}</div>
            </div>
            <div className={sidebarMenuBookmark}>
              {data.isBookMark ? (
                <div onClick={onClickCancleBookmark}>
                  <GoBookmarkFill />
                </div>
              ) : (
                <div onClick={onClickCreateBookmark}>
                  <GoBookmark />
                </div>
              )}
            </div>
          </div>
          <div>
            <div className={sidebarMenuInfoDetail}>
              <div
                onClick={onClickDetail}
                className={sidebarMenuInfoDetailItem({
                  active: isActiveDetail.isActiveDetail ? 'borderBottom' : undefined,
                })}
              >
                상세정보
              </div>
              <div
                onClick={onClickReview}
                className={sidebarMenuInfoDetailItem({
                  active: isActiveReview.isActiveReview ? 'borderBottom' : undefined,
                })}
              >
                {review.isOpened ? '리뷰작성하기' : '리뷰보기'}
              </div>
            </div>
            {isActiveDetail.isActiveDetail ? (
              <div>
                <SideBarMenuInfoDetail data={data} />
              </div>
            ) : null}
            {isActiveReview.isActiveReview ? (
              <div>{review.isOpened && login.isLogin ? <CreateReview /> : <SideBarMenuInfoReview />}</div>
            ) : null}
          </div>
          {login.isLogin ? (
            ''
          ) : (
            <Modal
              ariaHideApp={false}
              isOpen={isModalOpen.isModalOpen}
              onRequestClose={() => setIsModalOpen({ isModalOpen: false })}
              shouldCloseOnEsc={true}
              shouldCloseOnOverlayClick={true}
              style={{
                overlay: loginModal.overlay,
                content: loginModal.content,
              }}
            >
              <SelectLogin />
            </Modal>
          )}
          {isCreateReviewModalOpen.isCreateReviewModalOpen && (
            <Modal
              ariaHideApp={false}
              isOpen={isCreateReviewModalOpen.isCreateReviewModalOpen}
              onRequestClose={() => setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: false }))}
              shouldCloseOnEsc={true}
              shouldCloseOnOverlayClick={true}
              style={{
                overlay: closeModal.overlay,
                content: {
                  ...closeModal.content,
                  textAlign: closeModal.content.textAlign as React.CSSProperties['textAlign'],
                },
              }}
            >
              <AlertModal />
            </Modal>
          )}
        </div>
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
