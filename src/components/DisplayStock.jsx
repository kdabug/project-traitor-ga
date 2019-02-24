import React from "react";

const DisplayStock = props => {
  return (
    <div className="article">
      <h1 id="title">{props.stockData.symbol}</h1>
    </div>
  );
};
export default DisplayStock;
