import React from 'react';
import { Routes } from 'routes';
import ReduxToastr from 'react-redux-toastr';

export default () => {
    return (
        <>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={true}
                preventDuplicates
                position="bottom-left"
                getState={(state) => state.toastr} // This is the default
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick/>
            <Routes />
        </>
    );
}