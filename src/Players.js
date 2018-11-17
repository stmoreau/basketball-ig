import React, { useState } from "react";
import TableRow from "./TableRow";
import { players, columns } from "./helpers/constants";
import TableHeader from "./TableHeader";

const Players = () => {
  const [tablePlayers, setPlayers] = useState(players);
  const [directions, setDirections] = useState({
    id: "",
    name: "",
    accepted: ""
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
    if (typeof a[sortKey] === "string") {
      return String(b[sortKey]).localeCompare(String(a[sortKey]));
    } else {
      return b[sortKey] - a[sortKey];
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
    <table id="playersTable">
      <thead>
        <tr>
          {columns.map((column, i) => (
            <TableHeader
              key={column.id}
              direction={directions[column.id]}
              handleClick={() => sort(column.id, directions[column.id])}
              column={column}
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
