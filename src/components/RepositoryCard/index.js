import React from 'react';
import { Card } from 'components';

export default ({repository}) => {

    return (
        <Card>{repository.full_name}</Card>
    )
}