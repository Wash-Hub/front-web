import { useEffect } from 'react';
import { useRefreshToken } from './useMutation'; // Custom hook
import { useRecoilState } from 'recoil';
import { updateTokenAtom } from '../recoil/atoms/loginState';
import { CONFIG } from '../../config';
import { instanceJson } from '../api/instanceJson';
import { instanceFormData } from '../api/instanceFormData';

export const useAxiosInterceptors = () => {
  const refreshMutation = useRefreshToken();
  const [, setToken] = useRecoilState(updateTokenAtom);

  useEffect(() => {
    instanceFormData.interceptors.request.use((config) => {
      const token = JSON.parse(localStorage.getItem(CONFIG.TOKEN_KEY) as string);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    instanceFormData.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const { response } = error;
        const { data } = response;
        if (data.message === 'Expired AccessToken') {
          try {
            const newToken = await refreshMutation.mutateAsync();
            setToken(newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return instanceFormData.request(originalRequest);
          } catch (error) {
            alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
            window.localStorage.removeItem(CONFIG.TOKEN_KEY);
            window.location.href = '/';
          }
        } else if (data.message === 'Expired RefreshToken') {
          alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
          window.localStorage.removeItem(CONFIG.TOKEN_KEY);
          window.location.href = '/';
        }
        return Promise.reject(error);
      }
    );
  }, [refreshMutation, setToken]);
};

export const useAxiosInterceptorsJson = () => {
  const refreshMutation = useRefreshToken();
  const [, setToken] = useRecoilState(updateTokenAtom);
  useEffect(() => {
    instanceJson.interceptors.request.use((config) => {
      const token = JSON.parse(localStorage.getItem(CONFIG.TOKEN_KEY) as string);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    instanceJson.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const { response } = error;
        const { data } = response;
        if (data.message === 'Expired AccessToken') {
          try {
            const newToken = await refreshMutation.mutateAsync();
            setToken(newToken);
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return instanceJson.request(originalRequest);
          } catch (error) {
            alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
            window.localStorage.removeItem(CONFIG.TOKEN_KEY);
            window.location.href = '/';
          }
        } else if (data.message === 'Expired RefreshToken') {
          alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
          window.localStorage.removeItem(CONFIG.TOKEN_KEY);
          window.location.href = '/';
        }
        return Promise.reject(error);
      }
    );
  }, [refreshMutation, setToken]);
};
