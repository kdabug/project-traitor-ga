import React from "react";
import Nav from "./Nav";

const Chest = props => {
  return (
    <div className="chest-container">
      <Nav />
      <h1>chose the route of the traitor, have ye?</h1>
      <h2>here's your treasure chest</h2>
      <h2> Current bounty: {props.currentBooty}</h2>
      <ul>
        {" "}
        Current Inventory:
        {props.currentInventory.map((stock, index) => (
          <li key={index}>
            {stock.name} {stock.ticker} {stock.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chest;
