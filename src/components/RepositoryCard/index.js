import React, { useState } from 'react';
import { Card, Avatar, RepositoryShowMore } from 'components';
import { useHistory } from 'react-router-dom';
import { formatDate } from '__helpers__';
import './styles.scss';

export default ({repository}) => {
    const history = useHistory();
    const [showMore, setShowMore] = useState(false);
    const fullName = repository.full_name.split('/');
    const company = fullName[0];
    const project = fullName[1];

    return (
        <Card>
            <div className="repository_card" >
                <header className="header">
                    <Avatar imgURL={repository.owner.avatar_url} />
                    <div>
                        <h3>{repository.name}</h3>
                        <sub>{repository.full_name}</sub>
                    </div>
                    <button onClick={() => history.push(`/repo/${company}/${project}/issues/all`)}>Issues</button>
                </header>
                <main>
                    <span>Created: {formatDate(repository.date_created)}</span>
                    <p>{repository.description}</p>
                </main>
                <footer className="hover" onClick={() => setShowMore(!showMore)}>
                    {!showMore && <span>Show more</span>}
                    {showMore && <RepositoryShowMore details={repository} />}
                </footer>
            </div>
        </Card>
    )
}