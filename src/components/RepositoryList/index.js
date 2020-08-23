import React, { useEffect, useState } from 'react';
import api from 'api';
import { RepositoryCard } from 'components';
import './styles.scss';

export default () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const getRepositories = async () => {
            const response = await api.get('/repositories?q=bootstrap');
            setRepositories(response.data);
            console.log(response.data);
        }

        getRepositories();
    },[]);

    return (
        <div className="repository_list">
            <h2>List</h2>
            {repositories.map(repository => <RepositoryCard key={repository.node_id} repository={repository} />)}
        </div>
    )
}