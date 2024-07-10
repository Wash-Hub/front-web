import { RecoilState, atom } from 'recoil';

interface MenuState {
  isOpened: boolean;
  isMyPageOpened?: boolean;
}

export const menuState: RecoilState<MenuState> = atom({
  key: 'menuState',
  default: {
    isOpened: false,
    isMyPageOpened: false,
  } as MenuState,
});

export const reviewState: RecoilState<MenuState> = atom({
  key: 'reviewState',
  default: {
    isOpened: false,
  } as MenuState,
});
