import React from 'react';
import { render } from 'react-dom';
import { App } from 'components';
import Root from 'Root';
import 'index.scss';

render(
    <Root>
        <App />
    </Root>,
    document.querySelector('#root')
);