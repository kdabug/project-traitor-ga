import React from "react";

const DisplayStock = props => {
  return (
    <div className="article">
      <p id="ticker">{props.stockData.symbol}</p>
    </div>
  );
};
export default DisplayStock;
