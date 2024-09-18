import axios from 'axios';
import { useRecoilState } from 'recoil';
import { updateTokenAtom } from '../recoil/atoms/loginState';
import { useRefreshToken } from '../hooks/useMutation';
import { CONFIG } from '../../config';

export const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem(CONFIG.TOKEN_KEY) as string);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const refreshMutation = useRefreshToken();
    const [, setToken] = useRecoilState(updateTokenAtom);
    const { config: originalRequest, response } = error;
    const { data } = response;
    if (data.message === 'Expired AccessToken') {
      try {
        const newToken = await refreshMutation.mutateAsync();
        setToken(newToken);
        originalRequest.headers['Authorization'] = `${newToken}`;
        return instance.request(originalRequest);
      } catch (error) {
        alert('예기치 못한 오류가 발생하였습니다. 다시 로그인해주세요.');
        window.localStorage.removeItem(CONFIG.TOKEN_KEY);
        window.location.href = `/`;
      }
    } else if (data.message === 'Expired RefreshToken') {
      alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
      window.localStorage.removeItem(CONFIG.TOKEN_KEY);
      window.location.href = `/`;
    }
  }
);
