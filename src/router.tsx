import { createBrowserRouter } from 'react-router-dom';
import { KakaoRedirection } from './components/login/kakao/kakaoRedirection';
import { Home } from './routes/home';
import { ErrorBoundary } from './components/errorBoundary/errorBoundary';

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
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/api/auth/kakao/callback',
    element: <KakaoRedirection />,
  },
];

export const router = createBrowserRouter(routes);
