import { atom, RecoilState, selector, selectorFamily } from 'recoil';
import { location } from '../../type';
import axios from 'axios';
import { CONFIG } from '../../../config';

export const mapState: RecoilState<location> = atom({
  key: 'mapState',
  default: {
    latitude: 0,
    longitude: 0,
  },
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

export const getMapDataAtom = selector({
  key: 'getMapDataAtom',
  get: async ({ get }) => {
    const client = get(defaultClientMapAtom);
    const { data } = await client.post('/map/coordinates');
    return data;
  },
});

export const getDetailMapDataAtom = selectorFamily({
  key: 'getDetailMapDataAtom',
  get:
    (id: number) =>
    async ({ get }) => {
      const client = get(defaultClientMapAtom);
      const { data } = await client.get(`/map/coordinates/${id}`);
      return data;
    },
});
