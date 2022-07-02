import React from 'react';

const Room501 = (props) => {
    const {announcement, count} = props;
    return (
        <div>
            <h2>Room 501</h2>
            <small>{announcement}</small>
            <small>{count}</small>
        </div>
    );
};

export default Room501;