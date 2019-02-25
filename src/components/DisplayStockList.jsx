import React from "react";
import DisplayStock from "./DisplayStock";

const DisplayStockList = props => {
  const { stockList } = props;
  //console.log("stockList: renderstock", stockList);
  return (
    <div className="stock-list">
      Hi React
      {stockList &&
        stockList.map((el, index) => (
          <DisplayStock key={index} stockData={el} />
        ))}
    </div>
  );
};
export default DisplayStockList;