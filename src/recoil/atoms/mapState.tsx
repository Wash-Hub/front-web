import { atom, RecoilState } from 'recoil';
import { location } from '../../type';

export const mapState: RecoilState<location> = atom({
  key: 'mapState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});
