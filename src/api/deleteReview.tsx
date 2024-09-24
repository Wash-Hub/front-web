import { instanceJson } from './instanceJson';

export const deleteReview = async (reviewId: string) => {
  const response = await instanceJson.delete(`/review/${reviewId}`);
  return response.status;
};
