import axios from 'axios';
import { CONFIG } from '../../config';

export const instance = axios.create({
  baseURL: CONFIG.DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const postReview = async (files: any, desc: any, currentLocation: any) => {
  try {
    const formData = new FormData();
    formData.append('files', files);
    formData.append('map', currentLocation);
    formData.append('desc', desc);
    const response = await instance.post(`/review/create`, formData);
    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
