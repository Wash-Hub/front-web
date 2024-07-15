import { RecoilState, atom } from 'recoil';

interface MenuState {
  isOpened: boolean;
}

export const menuState: RecoilState<MenuState> = atom({
  key: 'menuState',
  default: {
    isOpened: false,
  } as MenuState,
});

export const reviewState: RecoilState<MenuState> = atom({
  key: 'reviewState',
  default: {
    isOpened: false,
  } as MenuState,
});
