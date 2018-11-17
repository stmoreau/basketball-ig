import React from "react";
import { Link } from "react-router-dom";
import { contains, returnPlayer } from "./helpers/utils";
import { weekDays, players } from "./helpers/constants";

const Player = props => {
  const player = returnPlayer(players, props.match.params.player);
  return [
    <h3 key="heading-name">{player.name}</h3>,
    <p key="p-email">
      Email: <a href={"mailto:" + player.email}>{player.email}</a>
    </p>,
    <p key="p-title">Job Title: {player.title}</p>,
    <p key="p-interest">Level of Interest: {player.interest}</p>,
    <p key="p-times-played">Times Played: {player.datesParticipated.length}</p>,
    <ul key="ul-days" className="collection with-header">
      <li className="collection-header">
        <h5>Available Days:</h5>
      </li>
      {weekDays.map(day => (
        <li key={day} className="collection-item">
          <Link to={process.env.PUBLIC_URL + "/days/" + day.toLowerCase()}>
            {day}
            <span className="secondary-content">
              {contains.call(player.days, day) ? (
                <i className="check" />
              ) : (
                <i className="x" />
              )}
            </span>
          </Link>
        </li>
      ))}
    </ul>,
    <ul key="ul-dates-played" className="collection with-header">
      <li className="collection-header">
        <h5>Dates participated:</h5>
      </li>
      {player.datesParticipated.length ? (
        player.datesParticipated.map(date => (
          <li key={date} className="collection-item">
            {date}
          </li>
        ))
      ) : (
        <li className="collection-item">None yet</li>
      )}
    </ul>
  ];
};

export default Player;
