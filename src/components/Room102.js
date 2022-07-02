import React, { useContext } from 'react';
import { TourContext } from '../App';

const Room102 = (props) => {
    const {announcement, count} = props;
   const tour = useContext(TourContext)
    return (
        <div>
            <h2>Room 102</h2>
            <small>{announcement}</small>
            <small>{count}</small>
            <br/>
            <small>{tour}</small>
        </div>
    );
};

export default Room102;