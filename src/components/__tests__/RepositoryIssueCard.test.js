import React from 'react';
import { shallow } from 'enzyme';
import { RepositoryIssueCard, Avatar } from 'components';

describe('RepositoryIssueCard', () => {
    let wrapped;
    const issue = {
        user: {
            avatar_url: 'avatar_url',
            html_url: 'html_url'
        },
        state: 'open',
        title: 'Some Title',
        created_at: "2020-01-01T10:30:01.333+02:00",
        updated_at: "2020-01-02T11:45:01.333+02:00",
        comments: "My Comment"
    }

    beforeEach(() => {
        wrapped = shallow(
            <RepositoryIssueCard issue={issue} />
        );
    });

    it('has button', () => {
        expect(wrapped.find('button').length).toEqual(1);
    });

    it('has Avatar', () => {
        expect(wrapped.find(Avatar).length).toEqual(1);
    });

    it('has state field with text "State: open"', () => {
        expect(wrapped.render().text()).toContain(`State: ${issue.state}`);
    });

    it('has title with text "Some Title"', () => {
        expect(wrapped.render().text()).toContain(`${issue.title}`);
    });

    it('has created field with text "Created: 01 Jan 2020 10:30"', () => {
        expect(wrapped.render().text()).toContain("Created: 01 Jan 2020 10:30");
    });

    it('has updated field with text "Updated: 02 Jan 2020 11:45"', () => {
        expect(wrapped.render().text()).toContain("Updated: 02 Jan 2020 11:45");
    });

    it('has comment field with text "Comments: My Comment"', () => {
        expect(wrapped.render().text()).toContain("Comments: My Comment");
    })
})