import React from "react";

const PlayerComponent = ({ ...props }) => {
  return <h3>Player: {props.playerName}</h3>;
};

export default PlayerComponent;
