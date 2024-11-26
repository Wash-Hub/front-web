import { useBookmark } from '@/hooks/Queries/useBookmark';
import { loginModalState } from '@/recoil/atoms/loginState';
import { GoBookmark } from 'react-icons/go';
import { GoBookmarkFill } from 'react-icons/go';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

export const InfoTitle = (data: any) => {
  const [, setIsModalOpen] = useRecoilState(loginModalState);
  const [isBookmarked, setIsBookmarked] = useState(data.data.isBookMark);

  const { createBookmark, cancelBookmark } = useBookmark(
    { mapId: data },
    {
      onOpenModal: () => setIsModalOpen({ isModalOpen: true }),
    },
  );

  const handleBookmarkToggle = () => {
    if (isBookmarked) {
      cancelBookmark();
      setIsBookmarked(false);
    } else {
      createBookmark();
      setIsBookmarked(true);
    }
  };

  return (
    <div>
      <img src={data.data.picture} alt="" className="relative h-[250px] w-full" />
      <div className="flex w-full flex-row justify-between p-2">
        <div>
          <div className="text-lg font-bold">{data.data.placeName}</div>
          <div className="text-sm text-gray-500">{data.data.roadName}</div>
        </div>
        <div className="cursor-pointer text-2xl text-gray-500 hover:text-black" onClick={handleBookmarkToggle}>
          {isBookmarked ? <GoBookmarkFill style={{ color: '#04befe' }} /> : <GoBookmark style={{ color: '#04befe' }} />}
        </div>
      </div>
    </div>
  );
};
