import React, { useState } from "react";
import TableRow from "./TableRow";
import { players, columns } from "./helpers/constants";
import TableHeader from "./TableHeader";

const Players = () => {
  const [tablePlayers, setPlayers] = useState(players);
  const [directions, setDirections] = useState({
    id: "",
    name: "",
    accepted: "",
    paid: ""
  });

  function sort(sortKey, dir) {
    handleSetPlayers(sortKey, tablePlayers, dir);
    handleSetDirections(sortKey, directions);
  }

  function handleSetPlayers(sortKey, tablePlayers, dir) {
    const newData = Array.from(tablePlayers);
    if (dir === "des") {
      newData.sort((a, b) => {
        return handleSetPlayersHelper(sortKey, a, b);
      });
    } else {
      newData.sort((b, a) => {
        return handleSetPlayersHelper(sortKey, a, b);
      });
    }

    setPlayers(newData);
  }

  function handleSetPlayersHelper(sortKey, a, b) {
    if (typeof a[sortKey] === "number") {
      return b[sortKey] - a[sortKey];
    } else if(typeof a[sortKey] === "string") {
      return b[sortKey].localeCompare(a[sortKey]);
    } else {
      return a[sortKey] - b[sortKey];
    }
  }

  function handleSetDirections(sortKey, directions) {
    const newDirections = Object.assign({}, directions);
    for (var k in newDirections) {
      if (k === sortKey) {
        if (newDirections[k] === "des") {
          newDirections[k] = "asc";
        } else {
          newDirections[k] = "des";
        }
      } else {
        newDirections[k] = "";
      }
    }
    setDirections(newDirections);
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(columns).map(key => (
            <TableHeader
              key={columns[key]}
              name={columns[key]}
              direction={directions[key]}
              handleClick={() => sort(key, directions[key])}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {tablePlayers.map((player, i) => (
          <TableRow key={player.name} player={player} />
        ))}
      </tbody>
    </table>
  );
};

export default Players;
