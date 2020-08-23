import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();
    return (
        <div className="login">
            <button onClick={() => dispatch(login(false, true))}>Login</button>
        </div>
    )
}