import { atom } from 'recoil';

interface LoginState {
  isLogin: boolean | DefaultValue | null;
}

interface LoginModalState {
  isModalOpen: boolean;
}

import { DefaultValue } from 'recoil';

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
