import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return [
    <h1 key="heading-1">This page is empty</h1>,
    <Link key="link-back" className="previous" to="/">
      Go to home page
    </Link>
  ];
};

export default FourOhFour;
