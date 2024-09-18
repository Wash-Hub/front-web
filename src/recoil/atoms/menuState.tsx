import { RecoilState, atom } from 'recoil';
import { MenuState } from '../../type';

export const menuState: RecoilState<MenuState> = atom({
  key: 'menuState',
  default: {
    isOpened: false,
    isMyPageOpened: false,
  } as MenuState,
});
