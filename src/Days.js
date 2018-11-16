import React from "react";
import { Link } from "react-router-dom";

const Days = () => {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return [
        <h1 key="heading-1">DAYS</h1>,
        <ul key="ul-days" className="collection with-header">
            <li className="collection-header"><h5>Days that people are available:</h5></li>
            {weekDays.map(day => (<li key={day} className="collection-item"><Link to={'days/'+day.toLowerCase()}>{day}</Link></li>))}
        </ul>
    ];
};

export default Days;
