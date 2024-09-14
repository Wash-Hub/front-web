import { useMutation } from 'react-query';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const refreshToken = async () => {
  const cookies = new Cookies();
  const refreshToken = cookies.get('refreshToken');
  const response = await axios.get('/api/auth/refresh', {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return response.data.data.accessToken;
};

export const useRefreshToken = () => {
  return useMutation(refreshToken);
};
