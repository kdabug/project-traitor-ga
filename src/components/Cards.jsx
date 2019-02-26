import React from "react";

const Cards = props => {
  return (
    <div className="cards-container">
      <h1>Name: {props.stock.companyInfo.name}</h1>
      <h1>Symbol: {props.stock.companyInfo.symbol}</h1>
      <h2>Price: {props.stock.price}</h2>
      <div
        className="card-logo"
        style={{ background_image: `${props.stock.companyLogo}` }}
      />
      <button>Buy</button>
      <button>Sell</button>
      <button>More Info</button>
    </div>
  );
};

export default Cards;
