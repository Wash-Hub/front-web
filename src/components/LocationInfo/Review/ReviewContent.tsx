import { reviewState } from '@/recoil/atoms/reviewState';
import { MdDelete } from 'react-icons/md';
import { useRecoilState } from 'recoil';

export const ReviewContent = ({ item, id }: any) => {
  const [, setIsDeleteReviewModalOpen] = useRecoilState(reviewState);
  const onClickDeleteReview = () => {
    setIsDeleteReviewModalOpen((prev) => ({ ...prev, isDeleteReviewModalOpen: true }));
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
          {id === item.user.id && (
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
