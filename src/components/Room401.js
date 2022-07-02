import React from 'react';

const Room401 = (props) => {
    const {announcement, count} = props;
    return (
        <div>
            <h2>Room 401</h2>
            <small>{announcement}</small>
            <small>{count}</small>
        </div>
    );
};

export default Room401;