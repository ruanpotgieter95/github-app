import React from 'react';
import { mount } from 'enzyme';
import { IssueFilters } from 'components';

// import Root from 'Root';
import { MemoryRouter } from 'react-router'

describe('IssueFilters', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = mount(
            <MemoryRouter initialentries="{['/repo/company/project/issues/null']}">
                <IssueFilters />
            </MemoryRouter>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('has 3 filter buttons', () => {
        expect(wrapped.find('button').length).toEqual(3);
    });

    describe('All filter button', () => {
        it('has text "All"', () => {
            expect(wrapped.find('button').at(0).props().children).toEqual("All");
        });

        it('has "value" prop to equal "all"', () => {
            expect(wrapped.find('button').at(0).props().value).toEqual("all");
        });
    })

    describe('Open filter button', () => {
        it('has text "Open"', () => {
            expect(wrapped.find('button').at(1).props().children).toEqual("Open");
        });

        it('has "value" prop to equal "open"', () => {
            expect(wrapped.find('button').at(1).props().value).toEqual("open");
        });
    })

    describe('Closed filter button', () => {
        it('has text "Closed"', () => {
            expect(wrapped.find('button').at(2).props().children).toEqual("Closed");
        });

        it('has "value" prop to equal "closed"', () => {
            expect(wrapped.find('button').at(2).props().value).toEqual("closed");
        });
    })

    

})