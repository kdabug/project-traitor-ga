import React from "react";
import DisplayStock from "./DisplayStock";
import Cards from "./Cards";

const DisplayStockList = props => {
  const { stockList, stockListInfo } = props;
  //console.log("stockList: renderstock", stockList);
  return (
    <div className="stock-list">
      StockList Displayed Here
      {stockList &&
        stockListInfo.map((stock, index) => (
          <Cards key={index} stock={stock} />
        ))}
    </div>
  );
};
export default DisplayStockList;
