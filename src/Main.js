import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Days from "./Days";
import Day from "./Day";
import { players } from "./helpers/constants";
import Player from "./Player";

const Main = () => {
  const player = returnPlayer(
    players,
    window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
  );
  return (
    <div className="container">
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route path={process.env.PUBLIC_URL + "/days/:day"} component={Day} />
        <Route exact path={process.env.PUBLIC_URL + "/days"} component={Days} />
        <Route
          path={process.env.PUBLIC_URL + "/players/:playerUrl"}
          render={() => <Player player={player} />}
        />
        <Redirect to={process.env.PUBLIC_URL + "/"} />
      </Switch>
    </div>
  );
};

function returnPlayer(players, urlName) {
  try {
    players.forEach(function(player) {
      if (player.email.toLowerCase().includes(urlName)) {
        throw player;
      }
    });
  } catch (player) {
    return player;
  }
}

export default Main;
