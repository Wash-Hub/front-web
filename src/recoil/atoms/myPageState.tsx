import { atom, RecoilState } from 'recoil';

interface MyPageState {
  isDropdownMenuOpened: boolean;
}

export const myPageState: RecoilState<MyPageState> = atom({
  key: 'myPageState',
  default: {
    isDropdownMenuOpened: false,
  } as MyPageState,
});
