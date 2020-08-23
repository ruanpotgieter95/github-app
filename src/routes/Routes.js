import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'routes';

import { Navbar, Login } from 'components';

export default () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login">
                   <Login />
                </PublicRoute>
                <PrivateRoute exact path="/dashboard">
                    <Navbar />
                    <div>Private Route</div>
                </PrivateRoute>
                <Redirect to="/dashboard" />
            </Switch>
        </Router>
    )
}
