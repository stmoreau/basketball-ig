import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./img/logo.png";

const NavBar = () => (
  <nav>
    <div className="container">
      <Link to={process.env.PUBLIC_URL + "/"} className="left">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="right">
        <li>
          <NavLink strict to={process.env.PUBLIC_URL + "/days"}>
            Days
          </NavLink>
        </li>
        <li>
          <NavLink strict to={process.env.PUBLIC_URL + "/players"}>
            Players
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
