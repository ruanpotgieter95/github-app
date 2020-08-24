import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'routes';

import { Navbar, Login, RepositoryList } from 'components';

export default () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login">
                   <Login />
                </PublicRoute>
                <PrivateRoute exact path="/dashboard">
                    <Navbar />
                    <div>Please search for an entity</div>
                </PrivateRoute>
                <PrivateRoute exact path="/repositories/:search">
                    <Navbar />
                    <RepositoryList />
                </PrivateRoute>
                <Redirect to="/dashboard" />
            </Switch>
        </Router>
    )
}
