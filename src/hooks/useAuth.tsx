import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { loginAtom, loginState, logoutAtom, updateTokenAtom } from '../recoil/atoms/loginState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const tokenLoadable = useRecoilValueLoadable(loginAtom);
  const setToken = useSetRecoilState(updateTokenAtom);
  const setIsLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();
  useEffect(() => {
    if (tokenLoadable.state === 'hasValue') {
      console.log(tokenLoadable.contents);
      const fetchedToken = tokenLoadable.contents;
      setToken(fetchedToken);
      setIsLogin((prevState) => ({ ...prevState, isLogin: true }));
      console.log(fetchedToken);
      navigate('/');
    } else if (tokenLoadable.state === 'hasError') {
      alert('로그인에 실패하였습니다. 다시 시도해주세요.');
      console.error('Error:', tokenLoadable.contents);
      navigate('/');
    } else if (tokenLoadable.state === 'loading') {
      console.log('loading');
    }
  }, [tokenLoadable, setToken]);
};

export const useLogout = () => {
  const setIsLogin = useSetRecoilState(loginState);
  const tokenLoadable = useRecoilValueLoadable(logoutAtom);
  const setToken = useSetRecoilState(logoutAtom);
  useEffect(() => {
    if (tokenLoadable.state === 'hasValue') {
      setToken(null);
      setIsLogin((prevState) => ({ ...prevState, isLogin: false }));
    } else if (tokenLoadable.state === 'hasError') {
      alert('로그아웃에 실패하였습니다. 다시 시도해주세요.');
      console.error('Error:', tokenLoadable.contents);
    }
  }, [setIsLogin]);
};
