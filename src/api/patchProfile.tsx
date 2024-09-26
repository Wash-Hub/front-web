import { instanceFormData } from './instanceFormData';

export const patchProfile = async (name: any, email: any, profileImg: any) => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('profileImg', profileImg);
    const response = await instanceFormData.patch(`/auth/`, formData);
    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
