import React from 'react';
import { Card, Avatar } from 'components';
import './styles.scss';

export default ({repository}) => {

    return (
        <Card>
            <div className="repository_card hover" onClick={() => console.log("Clicked")}>
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