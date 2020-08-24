import React from 'react';
import { shallow } from 'enzyme';
import { RepositoryPlaceholder, Card } from 'components';

describe('Page', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<RepositoryPlaceholder />);
    });

    it('has Card component', () => {
        expect(wrapped.find(Card).length).toEqual(1);
    });
})