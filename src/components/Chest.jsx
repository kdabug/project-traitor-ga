import React from "react";
import Nav from "./Nav";

const Chest = props => {
  return (
    <div className="chest-container">
      <Nav />
      <div className="page-titles">
        <h1>chose the route of the traitor, have ye?</h1>
        <h2>yer treasure chest</h2>
      </div>
      <div className="chest-currents-display">
        <h2>Yer Bounty: {props.currentBooty}</h2>
        <h2>Treasurey:</h2>
        <ul className="inventory-list">
          {" "}
          {props.currentInventory.map((stock, index) => (
            <li key={index}>
              {stock.name} {stock.ticker} {stock.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chest;
