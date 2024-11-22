import { atom, DefaultValue, selector, useRecoilState } from 'recoil';
import { LoginModalState, LoginState } from '../../type';
import axios from 'axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { CONFIG } from '../../../config';
import { Cookies } from 'react-cookie';
import { useRefreshToken } from '@/hooks/Queries/useRefreshToken';
export const loginState = atom<LoginState>({
  key: 'loginState',
  default: {
    isLogin: false,
  },
});

export const loginModalState = atom<LoginModalState>({
  key: 'loginModalState',
  default: {
    isModalOpen: false,
  },
});

const tokenBaseAtom = atom({
  key: 'tokenBaseAtom',
  default: localStorage.getItem(CONFIG.TOKEN_KEY) ? JSON.parse(localStorage.getItem(CONFIG.TOKEN_KEY) as string) : null,
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        if (newValue === null) {
          localStorage.removeItem(CONFIG.TOKEN_KEY);
        } else {
          localStorage.setItem(CONFIG.TOKEN_KEY, JSON.stringify(newValue));
        }
      });
    },
  ],
});

export const updateTokenAtom = selector({
  key: 'updateTokenAtom',
  get: ({ get }) => {
    const token = get(tokenBaseAtom);
    return token;
  },
  set: ({ set }, newValue) => {
    set(tokenBaseAtom, newValue);
  },
});

export const defaultClientAtom = selector({
  key: 'defaultClientAtom',
  get: ({ get }) => {
    get(userUniqIdAtom);
    const instance = axios.create({
      baseURL: CONFIG.DOMAIN,
      withCredentials: true,
    });

    instance.interceptors.request.use((config: any) => {
      const token = get(updateTokenAtom);
      if (token) {
        config.headers.Authorization = `${token}`;
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
      },
    );
    return instance;
  },
});

export const userUniqIdAtom = selector({
  key: 'userUniqIdAtom',
  get: ({ get }) => {
    const token = get(updateTokenAtom);
    if (token) {
      const decodedToken = jwtDecode<JwtPayload & { userId: string }>(token);
      return decodedToken.userId;
    }
    return null;
  },
});

export const loginAtom = selector({
  key: 'loginAtom',
  get: async ({ get }) => {
    const client = get(defaultClientAtom);
    const code = new URL(window.location.href).searchParams.get('code');

    if (!code) {
      throw new Error('Authorization code not found.');
    }

    const { data } = await client.get(`/auth/kakao/callback?code=${code}`);
    const token = data.data.accessToken;
    const cookies = new Cookies();
    cookies.set('refreshToken', data.data.refreshToken, { path: '/' });
    return token;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    set(updateTokenAtom, newValue as string);
  },
});

export const logoutAtom = selector({
  key: 'logoutAtom',
  get: ({ get }) => {
    const client = get(defaultClientAtom);
    client.defaults.headers.Authorization !== undefined && client.post('/auth/logout');

    return null;
  },
  set: ({ set }) => {
    set(updateTokenAtom, null);
  },
});
