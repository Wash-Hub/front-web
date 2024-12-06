import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { updateTokenAtom } from '@/recoil/atoms/loginState';
import { useRefreshToken } from '../Queries/useRefreshToken';
import { instanceFormData } from '@/api/instanceFormData';
import { instanceJson } from '@/api/instanceJson';
import { CONFIG } from '../../../config';

export const useAxiosInterceptors = () => {
  const refreshMutation = useRefreshToken();
  const [, setToken] = useRecoilState(updateTokenAtom);

  useEffect(() => {
    instanceFormData.interceptors.request.use((config) => {
      const token = JSON.parse(sessionStorage.getItem(CONFIG.TOKEN_KEY) as string);
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
            window.sessionStorage.removeItem(CONFIG.TOKEN_KEY);
            window.location.href = '/';
          }
        } else if (data.message === 'Expired RefreshToken') {
          alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
          window.sessionStorage.removeItem(CONFIG.TOKEN_KEY);
          window.location.href = '/';
        }
        return Promise.reject(error);
      },
    );
  }, [refreshMutation, setToken]);
};

export const useAxiosInterceptorsJson = () => {
  const refreshMutation = useRefreshToken();
  const [, setToken] = useRecoilState(updateTokenAtom);
  useEffect(() => {
    instanceJson.interceptors.request.use((config) => {
      const token = JSON.parse(sessionStorage.getItem(CONFIG.TOKEN_KEY) as string);
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
            window.sessionStorage.removeItem(CONFIG.TOKEN_KEY);
            window.location.href = '/';
          }
        } else if (data.message === 'Expired RefreshToken') {
          alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
          window.sessionStorage.removeItem(CONFIG.TOKEN_KEY);
          window.location.href = '/';
        }
        return Promise.reject(error);
      },
    );
  }, [refreshMutation, setToken]);
};
