"use strict";
import React from "react";
import { Route, Link } from "react-router-dom";

const Welcome = props => {
  return (
    <div className="welcome-container">
      <div className="welcome-script">
        <h2 className="subtitle">
          for those who choose to enter:
          <br /> we send pirates, theives and <br />{" "}
          <span className="title">traitors</span>
          <br />
          to the stocks.
        </h2>
        <div className="welcome-button-container">
          <button className="welcome-button">
            <Link to="/chest" id="start-trading-link">
              Start Trading
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
