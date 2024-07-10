import { GoBookmark } from 'react-icons/go';
import {
  scrollbar,
  sidebarMenuBookmark,
  sidebarMenuImg,
  sidebarMenuInfo,
  sidebarMenuInfoAddress,
  sidebarMenuInfoDetail,
  sidebarMenuInfoDetailItem,
  sidebarMenuInfoTitle,
} from './sideBarMenuInfo.css';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../../../recoil/atoms/sidebarState';
import { SideBarMenuInfoDetail } from './sideBarMenuInfoDetail/sideBarMenuInfoDetail';
import { SideBarMenuInfoReview } from './sideBarMenuInfoReview/sideBarMenuInfoReview';
import { reviewState } from '../../../recoil/atoms/menuState';
import { CreateReview } from './sideBarMenuInfoReview/createReview/createReview';
import { loginModalState, loginState } from '../../../recoil/atoms/loginState';
import Modal from 'react-modal';
import { SelectLogin } from '../../login/selecktLogin/selectLogin';
import { loginModal } from '../../../styles/globalStyle.css';
import { useOpen } from '../../../hooks/useOpen';
export const SideBarMenuInfo = () => {
  const [isActiveDetail] = useRecoilState(sidebarState);
  const [isActiveReview] = useRecoilState(sidebarState);
  const [review] = useRecoilState(reviewState);
  const { MenuControllDetail, MenuControllReview } = useOpen();
  const onClickDetail = () => {
    MenuControllDetail();
  };
  const onClickReview = () => {
    MenuControllReview();
  };
  const [isModalOpen, setIsModalOpen] = useRecoilState(loginModalState);
  const [login] = useRecoilState(loginState);
  return (
    <div className={review.isOpened ? scrollbar : ''}>
      <img src="public\test.jpg" alt="" className={sidebarMenuImg} />
      <div className={sidebarMenuInfo}>
        <div>
          <div className={sidebarMenuInfoTitle}>코인세탁소</div>
          <div className={sidebarMenuInfoAddress}>서울특별시 양천구 신정로 11길</div>
        </div>
        <div className={sidebarMenuBookmark}>
          <GoBookmark />
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
            <SideBarMenuInfoDetail />
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
    </div>
  );
};
