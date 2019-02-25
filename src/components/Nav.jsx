import React from "react";
import { Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Traitor</Link>
        <Link to="/chest">Chest</Link>
        <Link to="/plank">Plank</Link>
        <Link to="/compass">Compass</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/records">Records</Link>
      </nav>
    </>
  );
};

export default Nav;
