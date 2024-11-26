import { getReviewInfo } from '@/api/getReviewInfo';
import { useAxiosInterceptorsJson } from '@/hooks/Auth/useAxiosInterceptors';
import { userUniqIdAtom } from '@/recoil/atoms/loginState';
import { reviewState } from '@/recoil/atoms/reviewState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ReviewEmpty } from './ReviewEmpty';
import { ReviewContent } from './ReviewContent';
import { ReviewModal } from './ReviewModal/ReviewModal';
import { ReviewButton } from './ReviewButton';
import { ReviewImgModal } from './ReviewImgModal';
import { ReviewImg } from './ReviewImg';
export const Review = () => {
  useAxiosInterceptorsJson();
  const ReviewData = getReviewInfo();
  const [isImgModalOpen] = useRecoilState(reviewState);
  const id = useRecoilValue(userUniqIdAtom);
  const [isDeleteReviewModalOpen] = useRecoilState(reviewState);
  return (
    <div>
      {ReviewData === undefined || ReviewData.length === 0 ? (
        <ReviewEmpty />
      ) : (
        <div className="flex h-full w-full flex-col gap-4 p-4">
          {ReviewData.map((item: any) => (
            <div key={item.id} className="flex flex-col pt-2">
              <ReviewContent item={item} userId={id} />
              {item.img.length > 0 && <ReviewImg item={item} />}
              {isDeleteReviewModalOpen.isDeleteReviewModalOpen && <ReviewModal />}
            </div>
          ))}
        </div>
      )}
      <ReviewButton />
      {isImgModalOpen && <ReviewImgModal />}
    </div>
  );
};
