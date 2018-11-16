import React from "react";
import { Link } from "react-router-dom";
import {contains} from './helpers/utils';
import {players} from './helpers/players';

const Day = ({...props}) => {
    const day = props.day.replace(/^./, str => str.toUpperCase())
    return (
        <ul key="ul-days" className="collection with-header">
            <li className="collection-header"><h5>Players available on {day}</h5></li>
            {players.map(player => contains.call(player.days, day) ? 
                typeof player.name === "string" ? (
                    <li className="collection-item">
                        <Link className="arrow" to={process.env.PUBLIC_URL + '/'+String(player.name.toLocaleLowerCase().replace(' ', '.'))}>
                            {player.name}
                        </Link>
                    </li>
                    ) : (
                        <li className="collection-item">
                            {player.name}
                        </li>
                    )
                : '')
            }
        </ul>
    );
};

export default Day;
