import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return [
    <h1 key="heading-1">This page is empty</h1>,
    <Link key="link-back" className="previous" to={process.env.PUBLIC_URL + "/"}>
      Go to home page
    </Link>
  ];
};

export default FourOhFour;
