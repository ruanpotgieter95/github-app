import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositoryIssues } from 'api';
import { RepositoryIssueCard, IssueFilters } from 'components';
import { pieData } from '__helpers__';
import './styles.scss';


const pieOptions= {
    title:{
      display:true,
      text:'Current Issues',
      fontSize:20
    },
    legend:{
      display:true,
      position:'top'
    },
    maintainAspectRatio: false 
  }

export default () => {
    const dispatch = useDispatch();
    const { comp, proj, filter } = useParams();
    const issues = useSelector(state => state.repository.issues);
    const data = pieData(issues);

    const dataDetails = {
        labels: ["Open", "Closed"],
        datasets: [
            {
                label: "Issues",
                data: [data.openTotal, data.closeTotal],
                backgroundColor: ["#3bde00", "#b21f00"],
                borderColor: "#ffffff"
            }
        ]
    }

    useEffect(() => {
        dispatch(searchRepositoryIssues(comp, proj, filter))
    }, [comp, proj, filter, dispatch]);

    return (
        <div className="repository_issues">
            <IssueFilters />
            <h3>"{filter}" Repository issues for {comp}/{proj}</h3>
            <sub>Total: {data.total}  Open: {data.openTotal} Closed: {data.closeTotal}</sub>
            <div className="pie">
                <Pie data={dataDetails} options={pieOptions} width={400} height={400} />
            </div>
            {issues.map(issue => <RepositoryIssueCard key={issue.node_id} issue={issue} />)}
        </div>
    )
}