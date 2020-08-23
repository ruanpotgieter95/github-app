import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ children, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();
  
    return (
      <Route {...rest}>
          {!isAuthenticated ? children : <Redirect to={`${location.search.split('=')[1]}`} />}
      </Route>
    );
  }