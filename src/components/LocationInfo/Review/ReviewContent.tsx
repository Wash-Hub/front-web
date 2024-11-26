import { useReview } from '@/hooks/Queries/useReivew';
import { reviewState } from '@/recoil/atoms/reviewState';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const ReviewContent = ({ item, userId }: any) => {
  const [, setIsDeleteReviewModalOpen] = useRecoilState(reviewState);
  const { deleteReviewData } = useReview();
  const navigate = useNavigate();
  const onClickDeleteReview = () => {
    deleteReviewData(item.id);
    setIsDeleteReviewModalOpen((prev) => ({ ...prev, isDeleteReviewModalOpen: true }));
    navigate(0);
  };
  return (
    <div>
      <div className="flex w-full justify-between pb-2">
        <div className="flex items-center gap-2 text-sm font-bold">
          <img src={item.user.profileImg} alt="" className="h-5 w-5 rounded-full border border-black" />
          {item.user.name}
        </div>
        <div className="flex items-center justify-between gap-1">
          <div className="text-xs font-normal text-gray-500">{item.createdAt}</div>
          {userId === item.user.id && (
            <div
              className="cursor-pointer text-red-400 transition-colors duration-300 hover:text-red-600"
              onClick={onClickDeleteReview}
            >
              <MdDelete />
            </div>
          )}
        </div>
      </div>
      <div className="pb-3 text-xs">{item.desc}</div>
    </div>
  );
};
