import React from "react";
import { Route, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Traitor</h1>
      <h2>
        to those who enter: we send pirates...all traitors...to the stocks.
      </h2>
      <Link to="/chest" id="start-trading-link">
        Start Trading
      </Link>
    </div>
  );
};

export default Welcome;
