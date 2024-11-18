import { loginModalState, loginState } from '@/recoil/atoms/loginState';
import { reviewState } from '@/recoil/atoms/reviewState';
import { useRecoilState } from 'recoil';

export const ReviewButton = () => {
  const [login] = useRecoilState(loginState);
  const [, setReview] = useRecoilState(reviewState);
  const [, setIsModalOpen] = useRecoilState(loginModalState);
  const onClick = () => {
    setIsModalOpen({ isModalOpen: true });
    if (login.isLogin) setReview((prev) => ({ ...prev, isOpened: true }));
  };
  return (
    <div className="absolute bottom-3 left-0 z-10 w-full overflow-hidden rounded-lg p-1.5 sm:right-[3%]">
      <button
        className="h-[50px] w-full cursor-pointer rounded-lg border border-[#e0e0e0] bg-[#04befe] text-lg font-bold text-white shadow-[0px_0px_5px_0px_#e0e0e0] transition-all hover:bg-[#0056b3]"
        onClick={onClick}
      >
        리뷰 작성하기
      </button>
    </div>
  );
};
