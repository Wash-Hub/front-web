import { RecoilState, atom } from 'recoil';

interface ReviewState {
  isImgModalOpen: boolean;
  selectedImg: string;
  isOpened: boolean;
}

export const reviewState: RecoilState<ReviewState> = atom({
  key: 'reviewState',
  default: {
    isImgModalOpen: false,
    selectedImg: '',
    isOpened: false,
  } as ReviewState,
});
