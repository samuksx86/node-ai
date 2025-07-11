import { createBrowserRouter } from 'react-router';
import { LoginPage } from '@/pages/login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/chat',
    element: <div>CHAT</div>,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);
