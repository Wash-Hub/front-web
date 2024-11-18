import { useRecoilState } from 'recoil';
import { sidebarState } from '../recoil/atoms/sidebarState';

export const useOpen = () => {
  const [, setIsActiveDetail] = useRecoilState(sidebarState);
  const [, setIsActiveReview] = useRecoilState(sidebarState);

  const MenuControllDetail = () => {
    setIsActiveDetail((prevState) => ({ ...prevState, isActiveDetail: true }));
    setIsActiveReview((prevState) => ({ ...prevState, isActiveReview: false }));
  };

  const MenuControllReview = () => {
    setIsActiveDetail((prevState) => ({ ...prevState, isActiveDetail: false }));
    setIsActiveReview((prevState) => ({ ...prevState, isActiveReview: true }));
  };

  return {
    MenuControllReview,
    MenuControllDetail,
  };
};
