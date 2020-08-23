import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ children, ...rest }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const { pathname, search } = useLocation();

    return (
      <Route {...rest}>
        {isAuthenticated ? children : <Redirect to={`/login?redirect=${pathname}${search}`} />}
      </Route>
    )
  };


