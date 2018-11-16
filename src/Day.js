import React from "react";
import { Link } from "react-router-dom";

const Day = () => {
  return [
    <h1 key="heading-1">DAY</h1>,
    <Link key="link-back" className="previous" to="/">
      Go to home page
    </Link>
  ];
};

export default Day;
