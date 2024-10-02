import { RecoilState, atom } from 'recoil';
import { SidebarState } from '../../type';

export const sidebarState: RecoilState<SidebarState> = atom({
  key: 'sidebarState',
  default: {
    isActiveDetail: true,
    isActiveReview: false,
    isActiveSearch: false,
  } as SidebarState,
});

export const windowSizeState = atom({
  key: 'windowSizeState',
  default: true,
});
