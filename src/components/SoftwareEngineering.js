import React from 'react';
import Room101 from './Room101';
import Room102 from './Room102';

const SoftwareEngineering = (props) => {
    const {announcement, count} = props;
    return (
        <div>
            <h1>SoftwareEngineering</h1>
            <Room101 count={count} announcement={announcement} />
            <Room102 count={count} announcement={announcement} />
        </div>
    );
};

export default SoftwareEngineering;