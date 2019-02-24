import React from "react";
import DisplayStock from "./DisplayStock";

const RenderStock = props => {
  const { stocks } = props;
  return (
    <div className="stock-list">
      {stocks.map((el, index) => (
        <DisplayStock key={index} stockData={el} />
      ))}
    </div>
  );
};
export default RenderStock;
