import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchRepositories } from 'api';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { search } = useParams();
    const [searchTerm, setSearchTerm ] = useState(search || '');

    const submitSearch = event => {
        event.preventDefault();
        dispatch(searchRepositories(searchTerm));
        history.push(`/repositories/${searchTerm}`)
    }

    return (
        <form className="searchBar" onSubmit={submitSearch}>
            <input placeholder="search repositories" 
                value={searchTerm} onChange={({target}) => setSearchTerm(target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}