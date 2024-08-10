import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const KakaoRedirection = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  const navigate = useNavigate();
  if (code) {
    const { data, error } = useQuery('kakao', () =>
      axios.get(`http://localhost:8000/api/auth/kakao/callback?code=${code}`)
    );
    if (error) {
      alert('카카오 로그인에 실패했습니다.');
      navigate('/');
    }
    console.log(data);
    navigate('/');
  }
  return (
    <div>
      <span>카카오 로그인 리다이렉션 페이지</span>
    </div>
  );
};
