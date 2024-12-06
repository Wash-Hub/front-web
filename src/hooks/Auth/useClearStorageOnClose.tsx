import { useEffect } from 'react';
import { Cookies } from 'react-cookie';

export const useClearStorageOnClose = () => {
  useEffect(() => {
    let isRefreshed = false;

    const clearStorage = () => {
      if (!isRefreshed) {
        localStorage.removeItem('latitude');
        localStorage.removeItem('longitude');
        const cookies = new Cookies();
        cookies.remove('refreshToken', { path: '/' });
      }
    };

    const handleBeforeUnload = (event: any) => {
      if (event?.currentTarget?.performance?.navigation?.type === 1) {
        isRefreshed = true;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', clearStorage);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', clearStorage);
    };
  }, []);
};
