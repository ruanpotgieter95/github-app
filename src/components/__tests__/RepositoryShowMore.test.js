import React from 'react';
import { shallow } from 'enzyme';
import { RepositoryShowMore } from 'components';

describe('RepositoryIssueCard', () => {
    let wrapped;
    const details = {
        forks: 100,
        language: "Javascript",
        stargazers_count: 20,
        watchers: 50,
        url: 'https://url'
    }

    beforeEach(() => {
        wrapped = shallow(
            <RepositoryShowMore details={details} />
        );
    });

    it('has text with value "Forks: 100"', () => {
        expect(wrapped.render().text()).toContain(`Forks: ${details.forks}`);
    });

    it('has text with value "Language: Javascript"', () => {
        expect(wrapped.render().text()).toContain(`Language: ${details.language}`);
    });

    it('has text with value "Stargazers: 20"', () => {
        expect(wrapped.render().text()).toContain(`Stargazers: ${details.stargazers_count}`);
    });

    it('has text with value "Watchers: 50"', () => {
        expect(wrapped.render().text()).toContain(`Watchers: ${details.watchers}`);
    });

    it('has text with value "URL: https://url"', () => {
        expect(wrapped.render().text()).toContain(`URL: ${details.url}`);
    });

})