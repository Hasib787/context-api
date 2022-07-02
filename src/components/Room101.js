import React from 'react';

const Room101 = (props) => {
    const {announcement, count} = props;
    return (
        <div>
            <h2>Room 101</h2>
            <small>{announcement}</small>
            <small>{count}</small>
        </div>
    );
};

export default Room101;