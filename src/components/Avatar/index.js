import React from 'react';
import './styles.scss';

export default ({imgURL}) => {

    return (
        <img className="avatar" src={imgURL} alt="" />
    )
}