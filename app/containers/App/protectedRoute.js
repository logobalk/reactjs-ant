
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const isAuthenticated = false;

export const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...rest} />
      ) :
        (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
    )
    }
  />
);

export const LoginRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !isAuthenticated ? (
        <Component {...props} />
      ) :
        (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
    )}
  />
);