import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RepositoryCard, RepositoryPlaceholder } from 'components';
import './styles.scss';

export default () => {
    const { repositoryList, loading, repositoryTotal } = useSelector(state => ({
        repositoryList: state.repository.list.items,
        repositoryTotal: state.repository.list.total_count,
        loading: state.repository.loading
    }), shallowEqual);

    return (
        <div className="repository_list">
            {!loading && <h2>Found {repositoryTotal} results</h2>}
            {loading && (<>
                    <h3>Loading...</h3>
                    <RepositoryPlaceholder />
                    <RepositoryPlaceholder />
                    <RepositoryPlaceholder />
                </>
            )}
            {(!loading && repositoryList.length === 0) && <h3>No Results found</h3>}
            {!loading && repositoryList.map(repository => <RepositoryCard key={repository.node_id} repository={repository} />)}
        </div>
    )
}