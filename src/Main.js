import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Others from './Others';
import {players} from './players';

const Main = () => {
  const player = returnPlayer(players, window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
  return(
  <div className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path={'/:playerUrl'} render={() => <Others player={player} />} />
    </Switch>
  </div>
  );
};

function returnPlayer(players, urlName){
  try {
    players.forEach(function(player) {
      if (player.email.toLowerCase().includes(urlName)){
        throw player;
      }
    });
  } catch (player) {
    return player;
  }
}

export default Main;
