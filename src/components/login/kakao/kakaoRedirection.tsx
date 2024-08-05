import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const KakaoRedirection = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  console.log(code);
  const navigate = useNavigate();
  useEffect(() => {
    // 서버 통신 로직 추가해야함
    if (code) {
      navigate('/');
    }
  }, []);
  return (
    <div>
      <span>카카오 로그인 리다이렉션 페이지</span>
    </div>
  );
};
