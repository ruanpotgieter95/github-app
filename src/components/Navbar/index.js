import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import Logo from 'assets/logo/Octocat.png';
import './styles.scss';

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <nav>
            <div>
                <img src={Logo} alt="" />
                <span className="hover button" 
                    onClick={() => history.push('/repositories')}
                >Repositories</span>
            </div>
            <span className="hover" 
                onClick={() => dispatch(login(false, false))}
            >Logout</span>
        </nav>
    )
}

