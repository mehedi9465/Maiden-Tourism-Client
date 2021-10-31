import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Custom Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, status } = useAuth();
    if(status){
      return(
        <Spinner animation="grow" />
      )
    }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;