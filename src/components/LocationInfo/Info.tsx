import { getMapInfo } from '@/api/getMapInfo';
import { useAxiosInterceptorsJson } from '@/hooks/Auth/useAxiosInterceptors';
import { loginState } from '@/recoil/atoms/loginState';
import { reviewState } from '@/recoil/atoms/reviewState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { InfoTitle } from './InfoTitle';
import { InfoNavigation } from './InfoNavigation';
import { Toast } from '../Toast/Toast';
import { InfoLoading } from './InfoLoading';
import { Detail } from './Detail/Detail';
import { sidebarState } from '@/recoil/atoms/sidebarState';
import { Review } from './Review/Review';
import { ReviewCreate } from './Review/ReviewCreate';
import { ReviewModal } from './Review/ReviewModal/ReviewModal';
import 'react-toastify/dist/ReactToastify.css';

export const Info = () => {
  useAxiosInterceptorsJson();
  const [review] = useRecoilState(reviewState);
  const [login] = useRecoilState(loginState);
  const [isCreateReviewModalOpen, setCreateReviewModalOpen] = useRecoilState(reviewState);
  const MapData = getMapInfo();
  const [isActive] = useRecoilState(sidebarState);
  const handleOutsideClick = (event: MouseEvent) => {
    if (review.isOpened && login.isLogin) {
      const createReviewElement = document.getElementById('createReview');
      if (createReviewElement && !createReviewElement.contains(event.target as Node)) {
        setCreateReviewModalOpen((prev) => ({ ...prev, isCreateReviewModalOpen: true }));
      }
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [review.isOpened, login.isLogin]);

  return (
    <div>
      {MapData === undefined ? (
        <InfoLoading />
      ) : (
        <div>
          <InfoTitle data={MapData} />
          <InfoNavigation />
          {isActive.isActiveDetail && <Detail mapData={MapData} />}
          {isCreateReviewModalOpen.isCreateReviewModalOpen && <ReviewModal />}
          {isActive.isActiveReview && <div>{review.isOpened ? <ReviewCreate /> : <Review />}</div>}
        </div>
      )}
      <Toast />
    </div>
  );
};
