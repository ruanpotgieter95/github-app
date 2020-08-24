import React from 'react';
import { shallow } from 'enzyme';
import { App } from 'components';
import { Routes } from 'routes';

describe('App', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<App />);
    });

    it('renders routes', () => {
        expect(wrapped.find(Routes).length).toEqual(1);
    });
})

