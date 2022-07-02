import React from 'react';
import Room401 from './Room401';
import Room402 from './Room402';

const ComputerScience = (props) => {
    const {announcement, count} = props;
    return (
        <div>
            <h1>ComputerScience</h1>
            <Room401 count={count}  announcement={announcement}/>
            <Room402 count={count} announcement={announcement}/>
        </div>
    );
};

export default ComputerScience;