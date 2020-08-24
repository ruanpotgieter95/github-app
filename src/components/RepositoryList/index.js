import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RepositoryCard } from 'components';
import { searchRepositories } from 'api';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();
    const { search } = useParams();
    const { repositoryList, loading } = useSelector(state => ({
        repositoryList: state.repository.list,
        loading: state.repository.loading
    }), shallowEqual);

    useEffect(() => {
        if(!loading && repositoryList.length === 0) {
            dispatch(searchRepositories(search))
        }
        
    },[search, dispatch, repositoryList, loading]);

    return (
        <div className="repository_list">
            <h2>List</h2>
            {loading && <h3>Loading...</h3>}
            {repositoryList.map(repository => <RepositoryCard key={repository.node_id} repository={repository} />)}
        </div>
    )
}