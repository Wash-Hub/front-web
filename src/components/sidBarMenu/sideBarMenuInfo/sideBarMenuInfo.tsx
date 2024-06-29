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

export const SideBarMenuInfo = () => {
  const [isActiveDetail, setIsActiveDetail] = useRecoilState(sidebarState);
  const [isActiveReview, setIsActiveReview] = useRecoilState(sidebarState);
  const [review, setReview] = useRecoilState(reviewState);
  const onClick = () => {
    setIsActiveDetail((prevState) => ({ ...prevState, isActiveDetail: !prevState.isActiveDetail }));
    setIsActiveReview((prevState) => ({ ...prevState, isActiveReview: !prevState.isActiveReview }));
  };
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
            onClick={onClick}
            className={sidebarMenuInfoDetailItem({
              active: isActiveDetail.isActiveDetail ? 'borderBottom' : undefined,
            })}
          >
            상세정보
          </div>
          <div
            onClick={onClick}
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
          <div>{review.isOpened ? <CreateReview /> : <SideBarMenuInfoReview />}</div>
        ) : null}
      </div>
    </div>
  );
};
