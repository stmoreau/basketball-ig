import React from "react";
import {Link} from 'react-router-dom';

const contains = function(needle) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = needle !== needle;
  var indexOf;

  if(!findNaN && typeof Array.prototype.indexOf === 'function') {
      indexOf = Array.prototype.indexOf;
  } else {
      indexOf = function(needle) {
          var i = -1, index = -1;

          for(i = 0; i < this.length; i++) {
              var item = this[i];

              if((findNaN && item !== item) || item === needle) {
                  index = i;
                  break;
              }
          }

          return index;
      };
  }

  return indexOf.call(this, needle) > -1;
};

const PlayerComponent = ({ ...props }) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return [
    <h3 key="heading-name">Player: {props.playerName}</h3>,
    <p key="p-email">Email: <a href={'mailto:'+props.email}>{props.email}</a></p>,
    <p key="p-title">Job Title: {props.title}</p>,
    <p key="p-interest">Level of Interest: {props.interest}</p>,
    <ul key="ul-days" className="collection with-header">
      <li class="collection-header"><h5>Available Days:</h5></li>
      {weekDays.map(day => (<li className="collection-item">{day} <span class="secondary-content">{(contains.call(props.days, day) ? <i class="check"/> : <i class="x"/>)}</span></li>))}
    </ul>,
    <ul key="ul-days" className="collection with-header">
      <li class="collection-header"><h5>Dates participated:</h5></li>
      {props.datesParticipated.length ? props.datesParticipated.map(date => (<li className="collection-item">{date}</li>)) : <li className="collection-item">None yet</li>}
    </ul>
  ];
};

export default PlayerComponent;
