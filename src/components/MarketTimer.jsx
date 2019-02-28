import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

const MarketTimer = props => {
  const marketOpen = () => {
    let openDate = new Date.parse(props.openDate[0].openTime);
    let date = new Date.parse();
    return openDate > date;
  };

  return (
    <div className="market-container">
      {marketOpen ? (
        <div className="market-open">
          <h1>aye aye capt'n ye market is open</h1>
        </div>
      ) : (
        <div>ships masts are down, market is closed</div>
      )}
    </div>
  );
};

export default withRouter(MarketTimer);
