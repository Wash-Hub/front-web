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
