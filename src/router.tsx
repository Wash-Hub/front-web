import { createBrowserRouter } from 'react-router-dom';
import { KakaoRedirection } from './components/Auth/KakaoRedirection';
import { Map } from './routes/Map';
import { Home } from '@/routes/Home';
import { LocationInfo } from './routes/LocationInfo';
import { Mypage } from './routes/Mypage';
import { SearchDetail } from './routes/SearchDetail';

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
      {
        path: '/mypage/:page',
        element: <Mypage />,
      },
      {
        path: '/search/:title/:page',
        element: <SearchDetail />,
      },
    ],
  },
  {
    path: '/api/auth/kakao/callback',
    element: <KakaoRedirection />,
  },
];

export const router = createBrowserRouter(routes);
