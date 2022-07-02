import React from 'react';

const Room402 = (props) => {
    const {announcement, count} = props;
    return (
        <div>
            <h2>Room 402</h2>
            <small>{announcement}</small>
            <small>{count}</small>
        </div>
    );
};

export default Room402;