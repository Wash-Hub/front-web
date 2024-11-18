import { reviewState } from '@/recoil/atoms/reviewState';
import { useRecoilState } from 'recoil';

export const ReviewImg = ({ item }: any) => {
  const [, setIsImgModalOpen] = useRecoilState(reviewState);
  const [, setSelectedImg] = useRecoilState(reviewState);
  const onClickImg = (img: string) => {
    setSelectedImg((prev) => ({ ...prev, selectedImg: img }));
    setIsImgModalOpen((prev) => ({ ...prev, isImgModalOpen: true }));
  };
  return (
    <img src={item.img} className="h-full w-full cursor-pointer rounded-lg" onClick={() => onClickImg(item.img)} />
  );
};
