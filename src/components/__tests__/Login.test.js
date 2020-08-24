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

    it('has text with value "Login"', () => {
        expect(wrapped.render().text()).toContain('Login');
    });

    it('has text with value "Only used to show private/public routes"', () => {
        expect(wrapped.render().text()).toContain('Only used to show private/public routes');
    });

    it('has text with value "Type a fake email and password"', () => {
        expect(wrapped.render().text()).toContain('Type a fake email and password');
    });

    it('has two inputs', () => {
        expect(wrapped.find('input').length).toEqual(2);
    });

    it('has button', () => {
        expect(wrapped.find('button').length).toEqual(1);
    });
})