import { RecoilState, atom } from 'recoil';

interface MenuState {
  isMyPageOpened?: boolean;
  isOpened?: boolean;
}

export const menuState: RecoilState<MenuState> = atom({
  key: 'menuState',
  default: {
    isOpened: false,
    isMyPageOpened: false,
  } as MenuState,
});
