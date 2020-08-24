import React from 'react';
import { Card, Avatar } from 'components';
import { useHistory } from 'react-router-dom';
import './styles.scss';

export default ({repository}) => {
    const history = useHistory();
    const fullName = repository.full_name.split('/')
    const company = fullName[0];
    const project = fullName[1];
    return (
        <Card>
            <div className="repository_card hover" onClick={() => history.push(`/repo/${company}/${project}/issues/all`)}>
                <header className="header">
                    <div>
                        <h3>{repository.name}</h3>
                        <sub>{repository.full_name}</sub>
                    </div>
                    <Avatar imgURL={repository.owner.avatar_url} />
                </header>
                <main>
                    <p>{repository.description}</p>
                </main>
            </div>
        </Card>
    )
}