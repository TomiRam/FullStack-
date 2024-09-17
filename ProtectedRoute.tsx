
import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { isAuthenticated } from './authService';
import { JSX } from 'react/jsx-runtime';

const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props: JSX.IntrinsicAttributes) =>
      isAuthenticated()
    }
  />
);

export default ProtectedRoute;