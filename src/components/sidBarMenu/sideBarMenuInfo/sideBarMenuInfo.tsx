import { GoBookmark } from 'react-icons/go';
import {
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

export const SideBarMenuInfo = () => {
  const [isActiveDetail, setIsActiveDetail] = useRecoilState(sidebarState);
  const [isActiveReview, setIsActiveReview] = useRecoilState(sidebarState);
  const onClick = () => {
    setIsActiveDetail((prevState) => ({ ...prevState, isActiveDetail: !prevState.isActiveDetail }));
    setIsActiveReview((prevState) => ({ ...prevState, isActiveReview: !prevState.isActiveReview }));
  };
  return (
    <div>
      <img src="public\test.png" alt="" className={sidebarMenuImg} />
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
            리뷰보기
          </div>
        </div>
        {isActiveDetail.isActiveDetail ? (
          <div>
            <SideBarMenuInfoDetail />
          </div>
        ) : null}
        {isActiveReview.isActiveReview ? (
          <div>
            <SideBarMenuInfoReview />
          </div>
        ) : null}
      </div>
    </div>
  );
};
