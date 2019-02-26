import React from "react";
import DisplayStock from "./DisplayStock";

const DisplayStockList = props => {
  const { stockList } = props;
  //console.log("stockList: renderstock", stockList);
  return (
    <div className="stock-list">
      StockList Displayed Here
      {stockList &&
        stockList.map((el, index) => (
          <div className="stock-card-container">hello</div>
        ))}
    </div>
  );
};
export default DisplayStockList;
