import { createBrowserRouter } from 'react-router-dom';
import { KakaoRedirection } from './components/Auth/KakaoRedirection';
import { Map } from './routes/Map';
import { Home } from '@/routes/Home';
import { LocationInfo } from './routes/LocationInfo';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <Map />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <LocationInfo />,
      },
    ],
  },
  {
    path: '/api/auth/kakao/callback',
    element: <KakaoRedirection />,
  },
];

export const router = createBrowserRouter(routes);
