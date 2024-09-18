import { RecoilState, atom } from 'recoil';
import { ReviewState } from '../../type';

export const reviewState: RecoilState<ReviewState> = atom({
  key: 'reviewState',
  default: {
    isImgModalOpen: false,
    selectedImg: '',
    isOpened: false,
  } as ReviewState,
});
