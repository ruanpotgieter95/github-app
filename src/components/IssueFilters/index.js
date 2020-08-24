import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './styles.scss';

export default () => {
    const history = useHistory();
    const {comp, proj, filter } = useParams();

    const filterIssues = (type) => {
        history.push(`/repo/${comp}/${proj}/issues/${type}`);
    }

    return (
        <div className="issue_filters">
            <button className={`${filter === 'all' && 'button_active'}`} 
                value='all' 
                onClick={({target}) => filterIssues(target.value)}>All</button>
            <button className={`${filter === 'open' && 'button_active'}`} 
                value='open' 
                onClick={({target}) => filterIssues(target.value)}>Open</button>
            <button className={`${filter === 'closed' && 'button_active'}`} 
                value='closed' 
                onClick={({target}) => filterIssues(target.value)}>Closed</button>
        </div>
    )
}