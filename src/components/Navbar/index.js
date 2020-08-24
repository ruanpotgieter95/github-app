import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import { SearchBar } from 'components';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <nav>
            <div>
                <span>Logo</span>
                <span className="hover button" 
                    onClick={() => history.push('/dashboard')}
                >Dashboard</span>
            </div>
            <SearchBar />
            <span className="hover" 
                onClick={() => dispatch(login(false, false))}
            >Logout</span>
        </nav>
    )
}

