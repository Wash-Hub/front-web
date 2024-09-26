import axios from 'axios';
import { CONFIG } from '../../config';

export const instanceFormData = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
