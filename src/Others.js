import React from "react";
import PlayerComponent from "./PlayerComponent";
import FourOhFour from "./FourOhFour";
import Days from "./Days";
import Day from "./Day";

export default function Others({ player }) {
  function returnName() {
    let name, component;
    if (
      player &&
      player.name &&
      player.name.props &&
      player.name.props.children
    ) {
      name = player.name.props.children;
    } else if (player && player.name) {
      name = player.name;
    } else if (window.location.href.substr(window.location.href.lastIndexOf("/") + 1) === "days") {
      name = "days";
    } else if (window.location.href.substr(window.location.href.lastIndexOf("/") + 1) === "monday") {
      name = "monday";
    } else if (window.location.href.substr(window.location.href.lastIndexOf("/") + 1) === "tuesday") {
      name = "tuesday";
    } else if (window.location.href.substr(window.location.href.lastIndexOf("/") + 1) === "wednesday") {
      name = "wednesday";
    } else if (window.location.href.substr(window.location.href.lastIndexOf("/") + 1) === "thursday") {
      name = "thursday";
    } else if (window.location.href.substr(window.location.href.lastIndexOf("/") + 1) === "friday") {
      name = "friday";
    }

    if(name){
      switch(name) {
        case "days":
          component = <Days />;
          break;
        case "monday":
          component = <Day day="monday" />;
          break;
        case "tuesday":
          component = <Day day="tuesday" />;
          break;
        case "wednesday":
          component = <Day day="wednesday" />;
          break;
        case "thursday":
          component = <Day day="thursday" />;
          break;
        case "friday":
          component = <Day day="friday" />;
          break;
        default:
          component = <PlayerComponent {...player} playerName={name} />;
      }
    }

    return component;
  }
  return returnName() ? (
    returnName()
  ) : (
    <FourOhFour />
  );
}
