import { createBrowserRouter } from 'react-router-dom';
import { KakaoRedirection } from './components/login/kakao/kakaoRedirection';
import { Main } from './routes/main';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/api/auth/kakao/callback',
    element: <KakaoRedirection />,
  },
];

export const router = createBrowserRouter(routes);
