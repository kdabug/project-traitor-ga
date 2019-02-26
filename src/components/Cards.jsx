import React from "react";
import { Route, Link } from "react-router-dom";

const Cards = props => {
  return (
    <div className="cards-container">
      <h1>Name: {props.stock.companyName}</h1>
      <h1>Symbol: {props.stock.symbol}</h1>
      <h2>Price: {props.stock.latestPrice}</h2>
      <div
        className="card-logo"
        style={{ background_image: `${props.stock.companyLogo}` }}
      />
      <button>Buy</button>
      <button>Sell</button>
      {/* <button>
        <Link to="/details/{ticker}" id="start-trading-link">
          Start Trading
        </Link>
      </button> */}
    </div>
  );
};

export default Cards;
