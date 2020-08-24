import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import Logo from 'assets/logo/Octocat.png';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        dispatch(login(false, true));
    }

    return (
        <div className="login">
            <form onSubmit={submit}>
                <img src={Logo} alt="" />
                <h3>Login</h3>
                <sub>Only used to show private/public routes</sub>
                <sub>Type a fake email and password</sub>
                <input type="email" required/>
                <input type="password" required/>
                <button>Login</button>
            </form>
        </div>
    )
}