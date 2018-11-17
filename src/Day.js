import React from "react";
import { Link } from "react-router-dom";
import { contains } from "./helpers/utils";
import { players, weekDays } from "./helpers/constants";
import FourOhFour from "./FourOhFour";

const Day = props => {
  const day = props.match.params.day.replace(/^./, str => str.toUpperCase());
  if (!contains.call(weekDays, day)) {
    return <FourOhFour />;
  }
  return (
    <ul key="ul-days" className="collection with-header">
      <li className="collection-header">
        <h5> Players available on {day} </h5>
      </li>
      {players.map(player =>
        contains.call(player.days, day) ? (
          <li key={player.id} className="collection-item">
            <Link
              to={
                process.env.PUBLIC_URL +
                "/players/" +
                player.name.toLocaleLowerCase().replace(" ", ".")
              }
            >
              {player.name}
            </Link>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );
};

export default Day;
