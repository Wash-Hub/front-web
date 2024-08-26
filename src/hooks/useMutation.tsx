import { useMutation } from 'react-query';
import axios from 'axios';

const refreshToken = async () => {
  const response = await axios.get('/api/auth/refresh', {
    withCredentials: true,
  });
  return response.data.data;
};

export const useRefreshToken = () => {
  return useMutation(refreshToken);
};
