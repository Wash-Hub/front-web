import { useOpen } from '@/hooks/useOpen';
import { reviewState } from '@/recoil/atoms/reviewState';
import { sidebarState } from '@/recoil/atoms/sidebarState';
import { useRecoilState } from 'recoil';

export const InfoNavigation = () => {
  const { MenuControllReview, MenuControllDetail } = useOpen();

  const [isActiveDetail] = useRecoilState(sidebarState);
  const [isActiveReview] = useRecoilState(sidebarState);
  const [review] = useRecoilState(reviewState);
  const onClickDetail = () => {
    setTimeout(() => {
      MenuControllDetail();
    }, 0);
  };

  const onClickReview = () => {
    setTimeout(() => {
      MenuControllReview();
    }, 0);
  };
  return (
    <div>
      <div className="flex w-full flex-row items-center justify-around pt-5">
        <div
          onClick={onClickDetail}
          className={`w-full cursor-pointer border-b-2 px-2 py-2 text-center text-sm ${
            isActiveDetail.isActiveDetail ? 'border-black' : 'border-gray-200'
          }`}
        >
          상세정보
        </div>
        <div
          onClick={onClickReview}
          className={`w-full cursor-pointer border-b-2 px-2 py-2 text-center text-sm ${
            isActiveReview.isActiveReview ? 'border-black' : 'border-gray-200'
          }`}
        >
          {review.isOpened ? '리뷰등록' : '리뷰보기'}
        </div>
      </div>
    </div>
  );
};
