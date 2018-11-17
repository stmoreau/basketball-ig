import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Players from "./Players";
import Days from "./Days";
import Day from "./Day";
import Player from "./Player";

const Main = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Players} />
        <Route path={process.env.PUBLIC_URL + "/days/:day"} component={Day} />
        <Route exact path={process.env.PUBLIC_URL + "/days"} component={Days} />
        <Route
          path={process.env.PUBLIC_URL + "/players/:player"}
          component={Player}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/players"}
          component={Players}
        />
        <Redirect to={process.env.PUBLIC_URL + "/"} />
      </Switch>
    </div>
  );
};

export default Main;
