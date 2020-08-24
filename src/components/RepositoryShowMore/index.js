import React from 'react';
import './styles.scss';

export default ({details}) => {
    return (
        <div className="repository_show_more">
            <div>
                <span>Forks: {details.forks}</span>
                <span>Language: {details.language}</span>
            </div>
            <div>
                <span>Stargazers: {details.stargazers_count}</span>
                <span>Watchers: {details.watchers}</span>
            </div>
            <span>URL: {details.url}</span>
        </div>
    )
}