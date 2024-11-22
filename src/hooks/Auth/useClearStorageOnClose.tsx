import { useEffect } from 'react';
import { CONFIG } from '../../../config';
import { Cookies } from 'react-cookie';

export const useClearStorageOnClose = () => {
  useEffect(() => {
    const clearStorage = () => {
      window.localStorage.removeItem(CONFIG.TOKEN_KEY);
      const cookies = new Cookies();
      cookies.remove('refreshToken', { path: '/' });
    };

    window.addEventListener('beforeunload', clearStorage);

    return () => {
      window.removeEventListener('beforeunload', clearStorage);
    };
  }, []);
};
