import { createBrowserRouter } from 'react-router-dom';
import { Home } from './routes/home';
import { KakaoRedirection } from './components/Auth/KakaoRedirection';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/api/auth/kakao/callback',
    element: <KakaoRedirection />,
  },
];

export const router = createBrowserRouter(routes);
