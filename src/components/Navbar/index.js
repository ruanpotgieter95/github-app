import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();
    return (
        <nav>
            <span>Logo</span>
            <span className="hover" 
                onClick={() => dispatch(login(false, false))}
            >Logout</span>
        </nav>
    )
}

