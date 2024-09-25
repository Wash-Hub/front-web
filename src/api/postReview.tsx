import { instanceFormData } from './instanceFormData';

export const postReview = async (files: any, desc: any, currentLocation: any) => {
  try {
    const formData = new FormData();
    formData.append('files', files);
    formData.append('map', currentLocation);
    formData.append('desc', desc);
    const response = await instanceFormData.post(`/review/create`, formData);
    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
