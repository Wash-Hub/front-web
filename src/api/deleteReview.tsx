import { instanceJson } from './instanceJson';

export const deleteReview = async (reviewId: number) => {
  const response = await instanceJson.delete(`/review/${reviewId}`);
  return response.status;
};
