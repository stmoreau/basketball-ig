import React from "react";
import {Link} from 'react-router-dom';
import {contains} from './helpers/utils';

const PlayerComponent = ({ ...props }) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return [
    <h3 key="heading-name">Player: {props.playerName}</h3>,
    <p key="p-email">Email: <a href={'mailto:'+props.email}>{props.email}</a></p>,
    <p key="p-title">Job Title: {props.title}</p>,
    <p key="p-interest">Level of Interest: {props.interest}</p>,
    <ul key="ul-days" className="collection with-header">
      <li className="collection-header"><h5>Available Days:</h5></li>
      {weekDays.map(day => (<li key={day} className="collection-item"><Link to={process.env.PUBLIC_URL+'days/'+day.toLowerCase()}>{day} <span className="secondary-content">{(contains.call(props.days, day) ? <i className="check"/> : <i className="x"/>)}</span></Link></li>))}
    </ul>,
    <ul key="ul-dates-played" className="collection with-header">
      <li className="collection-header"><h5>Dates participated:</h5></li>
      {props.datesParticipated.length ? props.datesParticipated.map(date => (<li key={date} className="collection-item">{date}</li>)) : <li className="collection-item">None yet</li>}
    </ul>
  ];
};

export default PlayerComponent;
