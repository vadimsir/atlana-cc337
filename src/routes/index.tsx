import React from 'react';
import { BrowserRouter, Navigate, Route as PublicRoute, RouteProps, Routes as ReactRoutes } from 'react-router-dom';

import Users from '../pages/Users';
import UserView from '../pages/Users/View';

export interface Route {
  bind: RouteProps;
  name?: string;
  hideInMenu: boolean;
}

export const routes: Route[] = [
  {
    bind: {
      path: '/users',
      element: <Users />,
    },
    name: 'Users',
    hideInMenu: false,
  },
  {
    bind: {
      element: <UserView />,
      path: '/users/:id',
    },
    name: 'User View',
    hideInMenu: true,
  },
  {
    bind: {
      path: '/*',
      element: <Users />,
    },
    hideInMenu: true,
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
