import React from 'react';
import Room501 from './Room501';
import Room502 from './Room502';

const ElectricalEngineering = (props) => {
    const {announcement, count} = props;
    return (
        <div>
            <h1>ElectricalEngineering</h1>
            <Room501 count={count} announcement={announcement}/>
            <Room502 count={count} announcement={announcement} />
        </div>
    );
};

export default ElectricalEngineering;