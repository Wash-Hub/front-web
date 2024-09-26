import { instanceJson } from './instanceJson';

export const deleteBookmark = async (mapId: string) => {
  try {
    const response = await instanceJson.delete(`/bookmark/${mapId}`);

    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
