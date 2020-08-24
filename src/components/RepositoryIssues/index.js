import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositoryIssues } from 'api';
import { Card } from 'components';
import { pieData } from '__helpers__';
import './styles.scss';


export default () => {
    const dispatch = useDispatch();
    const { comp, proj, filter } = useParams();
    const issues = useSelector(state => state.repository.issues);
    const data = pieData(issues);

    useEffect(() => {
        dispatch(searchRepositoryIssues(comp, proj, filter))
    }, [comp, proj, filter, dispatch]);

    return (
        <div className="repository_issues">
            <h3>Repository issues for {comp}/{proj}</h3>
            <sub>Total: {data.total}  Open: {data.openTotal} Closed: {data.closeTotal}</sub>
            {issues.map(issue => <Card key={issue.node_id}>{issue.state}</Card>)}
        </div>
    )
}