import axios from 'axios';
import { CONFIG } from '../../config';

export const instanceJson = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
