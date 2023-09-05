import React from 'react';
import nFound from './../img/404.jpg'

const NotFound = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{maxWidth: '80%', maxHeight: '400px'}} src={nFound} alt="not found"/>
        </div>
    );
};

export default NotFound;