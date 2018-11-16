import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Header = () => (
  <nav>
    <div className="nav-wrapper container">
      <Link to={process.env.PUBLIC_URL + "/"} className="brand-logo left">
        <img style={{ width: "70px" }} src={logo} alt="logo" />
      </Link>
      <ul className="right">
        <li>
          <Link to={process.env.PUBLIC_URL + "/days"}>Days</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
