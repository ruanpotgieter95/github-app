import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import { SearchBar } from 'components';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();
    return (
        <nav>
            <span>Logo</span>
            <SearchBar />
            <span className="hover" 
                onClick={() => dispatch(login(false, false))}
            >Logout</span>
        </nav>
    )
}

