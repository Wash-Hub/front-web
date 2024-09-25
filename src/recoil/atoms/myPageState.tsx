import { atom, RecoilState } from 'recoil';
import { MyPageState } from '../../type';

export const myPageState: RecoilState<MyPageState> = atom({
  key: 'myPageState',
  default: {
    isDropdownMenuOpened: false,
    isModalOpened: false,
  } as MyPageState,
});

export const myPagePaginationState = atom({
  key: 'myPagePaginationState',
  default: {
    page: 1,
  },
});
