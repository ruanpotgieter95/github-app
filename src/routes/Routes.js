import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'routes';

import { Navbar, Login, RepositoryList, RepositoryIssues, SearchBar, RepositoryPlaceholder, Page } from 'components';

export default () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login">
                   <Login />
                </PublicRoute>
                <PrivateRoute exact path="/repositories">
                    <Navbar />
                    <Page>
                        <SearchBar />
                        <RepositoryPlaceholder />
                        <RepositoryPlaceholder />
                        <RepositoryPlaceholder />
                    </Page>
                </PrivateRoute>
                <PrivateRoute exact path="/repositories/:search">
                    <Navbar />
                    <Page>
                        <SearchBar />
                        <RepositoryList />
                    </Page>
                </PrivateRoute>
                <PrivateRoute exact path="/repo/:comp/:proj/issues/:filter">
                    <Navbar />
                    <RepositoryIssues />
                </PrivateRoute>
                <Redirect to="/repositories" />
            </Switch>
        </Router>
    )
}
