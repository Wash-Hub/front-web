import { instanceJson } from './instanceJson';

export const patchProfile = async (name: any, email: any) => {
  try {
    const response = await instanceJson.patch(`/auth/`, {
      name: name,
      email: email,
      profileImg: null,
    });
    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
