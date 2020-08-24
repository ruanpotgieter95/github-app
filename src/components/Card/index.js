import React from 'react';
import './styles.scss';

export default ({children, onClick}) => (
    <div className="card" onClick={onClick}>
        {children}
    </div>
)