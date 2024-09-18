import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { loginAtom, loginState, logoutAtom, updateTokenAtom } from '../recoil/atoms/loginState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

export const useLogin = () => {
  const tokenLoadable = useRecoilValueLoadable(loginAtom);
  const setToken = useSetRecoilState(updateTokenAtom);
  const setIsLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();
  useEffect(() => {
    if (tokenLoadable.state === 'hasValue') {
      const fetchedToken = tokenLoadable.contents;
      setToken(fetchedToken);
      setIsLogin((prevState) => ({ ...prevState, isLogin: true }));
      navigate('/');
    } else if (tokenLoadable.state === 'hasError') {
      alert('로그인에 실패하였습니다. 다시 시도해주세요.');
      navigate('/');
    }
  }, [tokenLoadable, setToken]);
};

export const useLogout = (): (() => void) => {
  const tokenLoadable = useRecoilValueLoadable(logoutAtom);
  const setIsLogin = useSetRecoilState(loginState);
  const setToken = useSetRecoilState(logoutAtom);
  const navigate = useNavigate();
  const cookies = new Cookies();

  return () => {
    if (tokenLoadable.state === 'hasValue') {
      setToken(null);
      cookies.remove('refreshToken', { path: '/' });
      setIsLogin((prevState) => ({ ...prevState, isLogin: false }));
      navigate('/');
    } else if (tokenLoadable.state === 'hasError') {
      alert('로그아웃에 실패하였습니다. 다시 시도해주세요.');
    }
  };
};
