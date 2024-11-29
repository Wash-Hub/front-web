import { atom, RecoilState, selector } from 'recoil';
import { location } from '../../type';
import axios from 'axios';
import { CONFIG } from '../../../config';

export const mapState: RecoilState<location> = atom({
  key: 'mapState',
  default: {
    latitude: localStorage.getItem('latitude') ? parseFloat(localStorage.getItem('latitude') as string) : 0,
    longitude: localStorage.getItem('longitude') ? parseFloat(localStorage.getItem('longitude') as string) : 0,
  },
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('latitude', newValue.latitude.toString());
        localStorage.setItem('longitude', newValue.longitude.toString());
      });
    },
  ],
});

export const screenSizeState = atom({
  key: 'screenSizeState',
  default: {
    isSmallScreen: false,
  },
});

export const currentLocationAtom = atom({
  key: 'currentLocationAtom',
  default: {
    id: 'undefined',
  },
});

export const mapInitializedAtom = atom({
  key: 'mapInitializedAtom',
  default: false,
});

export const defaultClientMapAtom = selector({
  key: 'defaultClientMapAtom',
  get: () => {
    const instance = axios.create({
      baseURL: CONFIG.DOMAIN,
      withCredentials: true,
    });

    return instance;
  },
});

export const mapInfoState = atom({
  key: 'mapInfoState',
  default: [
    {
      id: '',
      latitude: 0,
      longitude: 0,
      picture: '',
      placeName: '',
      roadName: '',
    },
  ],
});

export const mapInfoAtom = selector({
  key: 'mapInfoAtom',
  get: ({ get }) => {
    return get(mapInfoState);
  },
  set: ({ set }, newValue) => {
    set(mapInfoState, newValue);
  },
});
