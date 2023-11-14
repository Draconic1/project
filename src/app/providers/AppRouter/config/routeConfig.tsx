import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { DisciplinesPage } from '@pages/DisciplinesPage';

import { getRouteLogin, getRouteHome, getRouteNotFound } from '@shared/constants';

import type { RequiredRouteProps } from '../model';
import { getRouteDisciplines, getRouteDisciplineTaking } from '@shared/constants/routes';
import { DisciplineTakingPage } from '@pages/DisciplineTakingPage';

export const routeConfig: RequiredRouteProps[] = [
  {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  {
    path: getRouteHome(),
    element: <HomePage />,
  },
  {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
  {
    path: getRouteDisciplines(),
    element: <DisciplinesPage />,
  },
  {
    path: getRouteDisciplineTaking(),
    element: <DisciplineTakingPage />,
  },
];
