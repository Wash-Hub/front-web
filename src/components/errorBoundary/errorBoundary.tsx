import { useEffect, useCallback } from 'react';
import { errorContainer, errorMessage, errorButton, animationWrapper } from './errorBoundary.css';
import { useRecoilState } from 'recoil';
import { errorState } from '../../recoil/atoms/errorState';
import { Player } from '@lottiefiles/react-lottie-player';
import errorAnimation from '../../../public/errorAnimation.json';

export const ErrorBoundary = ({ children }: any) => {
  const [hasError, setHasError] = useRecoilState(errorState);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  useEffect(() => {
    const errorHandler = () => {
      handleError();
    };

    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  if (hasError) {
    return (
      <div className={errorContainer}>
        <div className={animationWrapper}>
          <Player autoplay loop src={errorAnimation} style={{ height: '300px', width: '300px' }} />
        </div>
        <h1 className={errorMessage}>오류가 발생하였습니다.</h1>
        <button className={errorButton} onClick={handleReload}>
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  return children;
};
