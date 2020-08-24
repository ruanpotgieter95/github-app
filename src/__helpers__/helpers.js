import moment from 'moment';

export const pieData = (issues=[]) => {
    const total = issues.length;
    let openTotal = 0;
    let closeTotal = 0;
    
    issues.forEach(issue => {
        if(issue.state === "open") {
            openTotal += 1;
        } else if(issue.state === "closed") {
            closeTotal += 1;
        }
    });

    return { total, openTotal, closeTotal }
}

export const formatDate = (date) => moment(date).format('DD MMM YYYY HH:mm');