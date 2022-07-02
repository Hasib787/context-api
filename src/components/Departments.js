import React from 'react';
import ComputerScience from './ComputerScience';
import ElectricalEngineering from './ElectricalEngineering';
import SoftwareEngineering from './SoftwareEngineering';

const Departments = (props) => {

    const {announcement, count} = props;
    return (
        <div>
            <h1>Departments</h1>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <ComputerScience count={count} announcement={announcement} />
                <SoftwareEngineering count={count} announcement={announcement} />
                <ElectricalEngineering count={count} announcement={announcement} />
            </div>
        </div>
    );
};

export default Departments;