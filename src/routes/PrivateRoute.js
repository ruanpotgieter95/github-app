import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default ({ children, ...rest }) => {
    const isAuthenticated = true;
    const { pathname, search } = useLocation();

    return (
      <Route {...rest}>
        {isAuthenticated ? children : <Redirect to={`/login?redirect=${pathname}${search}`} />}
      </Route>
    )
  };


