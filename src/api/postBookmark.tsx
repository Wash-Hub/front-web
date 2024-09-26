import { instanceJson } from './instanceJson';

export const postBookmark = async (mapId: string) => {
  try {
    const response = await instanceJson.post(`/bookmark/create/`, {
      map: mapId,
    });

    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
