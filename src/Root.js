import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from 'reducers';
import { saveToSessionStorage, loadFromSessionStorage } from '__helpers__';

export default ({ children, initialState = loadFromSessionStorage()}) => {   
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunkMiddleware)
    );   

    store.subscribe(() =>  saveToSessionStorage({
        ...store.getState().auth.isAuthenticated && {
            auth: store.getState().auth,
            repository: store.getState().repository
        }
    }));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};