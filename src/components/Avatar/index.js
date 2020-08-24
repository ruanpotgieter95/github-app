import React from 'react';
import './styles.scss';

export default ({imgURL, onClick}) => {

    return (
        <img className="avatar hover" src={imgURL} alt="" onClick={onClick} />
    )
}