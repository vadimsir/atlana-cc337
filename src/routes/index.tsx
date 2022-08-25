import React from 'react';
import { BrowserRouter, Navigate, Route as PublicRoute, RouteProps, Routes as ReactRoutes } from 'react-router-dom';

import Users from '../pages/Users';
import UserView from '../pages/Users/View';

export interface Route {
  bind: RouteProps;
}

const routes: Route[] = [
  {
    bind: {
      path: '/users',
      element: <Users />,
    },
  },
  {
    bind: {
      element: <UserView />,
      path: '/users/:id',
    },
  },
  {
    bind: {
      path: '/*',
      element: <Users />,
    },
  },
];

const Routes: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <ReactRoutes>
      {routes.map(({ bind }) => (
        <PublicRoute key={`${bind.path}`} {...bind} />
      ))}
      <PublicRoute path="*" element={<Navigate to="/" replace />} />
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
