import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'components';

describe('Card', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<Card><span>Child</span></Card>);
    });

    it('has div tag', () => {
        expect(wrapped.find('div').length).toEqual(1);
    });

    it('renders children component', () => {
        expect(wrapped.containsMatchingElement(<span>Child</span>)).toEqual(true);
    })
})