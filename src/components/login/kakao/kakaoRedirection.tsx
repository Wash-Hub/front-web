import { ClipLoader } from 'react-spinners';
import { loginSpinner } from './kakaoRedirection.css';
import { useEffect } from 'react';
import { useLogin } from '../../../hooks/useAuth';
export const KakaoRedirection = () => {
  const login = useLogin();
  useEffect(() => {
    login;
  });
  return (
    <div className={loginSpinner}>
      <ClipLoader color="#36d7b7" loading={true} size={50} />
    </div>
  );
};
