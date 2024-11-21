import searchAnimation from '../../../public/searchAnimation.json';
import { Player } from '@lottiefiles/react-lottie-player';
export const SearchEmpty = () => {
  return (
    <div>
      <div className="m-0 flex h-[50%] items-center justify-center p-0 text-center text-lg font-bold text-gray-500">
        검색 결과가 없습니다.
      </div>
      <div>
        <Player autoplay loop src={searchAnimation} style={{ height: '100px', width: '200px' }} />
      </div>
    </div>
  );
};
