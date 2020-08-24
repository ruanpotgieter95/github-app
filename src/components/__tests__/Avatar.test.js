import React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from 'components';

describe('App', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<Avatar />);
    });

    it('has image tag', () => {
        expect(wrapped.find('img').length).toEqual(1);
    });
})