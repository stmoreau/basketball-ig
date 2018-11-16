import React from 'react';
import { Route, Link } from 'react-router-dom';
import PlayerComponent from './PlayerComponent';
import {players,urlNames} from './players';


function App({ match }) {
  const player = returnPlayer(players, window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
  return (
    <div className="App">
        <header className="App-header">
            People's Availability
        </header>
        <ul>
          {urlNames.map((data, i) => (<li key={i}><Link to={'/availability/' + data}>{players[i].name}</Link></li>))}
        </ul>

        <Route path={`${match.path}/:urlName`} render={() => <PlayerComponent ha="1" player={player} />} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Select a player if you wish to see more details.</h3>}
        />
      </div>
  );
}

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

export default App;
