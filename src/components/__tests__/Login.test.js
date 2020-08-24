import React from 'react';
import { mount } from 'enzyme';
import { Login } from 'components';
import Root from 'Root';

describe('Login', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(
            <Root>
                <Login />
            </Root>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('has button', () => {
        expect(wrapped.find('button').length).toEqual(1);
    });
})