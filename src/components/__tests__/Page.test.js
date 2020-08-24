import React from 'react';
import { shallow } from 'enzyme';
import { Page } from 'components';

describe('Page', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<Page><span>Child</span></Page>);
    });

    it('has div tag', () => {
        expect(wrapped.find('div').length).toEqual(1);
    });

    it('renders children component', () => {
        expect(wrapped.containsMatchingElement(<span>Child</span>)).toEqual(true);
    })
})