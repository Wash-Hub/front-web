import { Player } from '@lottiefiles/react-lottie-player';
import reviewAnimation from '../../../../public/reviewAnimation.json';

export const ReviewEmpty = () => {
  return (
    <div>
      <div className="py-5 text-center text-lg font-bold text-gray-500">👉여러분의 소중한 후기를 남겨주세요.👈</div>
      <div>
        <Player autoplay loop src={reviewAnimation} style={{ height: '100px', width: '200px' }} />
      </div>
    </div>
  );
};
