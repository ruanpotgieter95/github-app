import React from 'react';
import { Card, Avatar } from 'components';
import { formatDate } from '__helpers__';
import './styles.scss';

export default ({issue}) => {
    return (
        <Card>
            <div className="repository_issue_card_header">
                <Avatar imgURL={issue.user.avatar_url} onClick={() => window.open(issue.user.html_url)}/>
                <div className="title">
                    <span>State: {issue.state}</span>
                    <sub>{issue.title}</sub>
                </div>
                <button className="hover" onClick={() => window.open(issue.html_url)}>View</button>
            </div>
            <div className="repository_issue_card_footer">
                <div className="dates">
                    <span>Created: {formatDate(issue.created_at)}</span>
                    <span>Updated: {formatDate(issue.updated_at)}</span>
                    {issue.closed_at && <span>Closed: {formatDate(issue.closed_at)}</span>}
                </div>
                <span>Comments: {issue.comments}</span>
            </div>
        </Card>
    )
}