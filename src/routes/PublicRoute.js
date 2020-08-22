import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default ({ children, ...rest }) => {
    const isAuthenticated = true;
    const location = useLocation();
  
    return (
      <Route {...rest}>
          {!isAuthenticated ? children : <Redirect to={`${location.search.split('=')[1]}`} />}
      </Route>
    );
  }