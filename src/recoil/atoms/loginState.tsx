import { atom } from 'recoil';
import { LoginModalState, LoginState } from '../../type';

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
