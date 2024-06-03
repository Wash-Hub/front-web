import { atom, RecoilState } from 'recoil';

interface MapState {
  latitude: number;
  longitude: number;
}

export const mapState: RecoilState<MapState> = atom({
  key: 'mapState',
  default: {
    latitude: 37.5665,
    longitude: 126.978,
  },
});
