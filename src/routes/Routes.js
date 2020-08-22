import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'routes';

export default () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login">
                   <div>Public Route</div>
                </PublicRoute>
                <PrivateRoute exact path="/dashboard">
                    <div>Private Route</div>
                </PrivateRoute>
                <Redirect to="/dashboard" />
            </Switch>
        </Router>
    )
}
