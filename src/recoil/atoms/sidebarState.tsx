import { RecoilState, atom } from 'recoil';

interface SidebarState {
  isActiveDetail: boolean;
  isActiveReview: boolean;
  isActiveSearch: boolean;
}

export const sidebarState: RecoilState<SidebarState> = atom({
  key: 'sidebarState',
  default: {
    isActiveDetail: true,
    isActiveReview: false,
    isActiveSearch: false,
  } as SidebarState,
});
