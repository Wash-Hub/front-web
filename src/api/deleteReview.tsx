import { instanceJson } from './instanceJson';

export const deleteReview = async (reviewId: string) => {
  try {
    const response = await instanceJson.delete(`/review/${reviewId}`);
    return response.status;
  } catch (error: any) {
    return error.response.status;
  }
};
