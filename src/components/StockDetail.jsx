import React, { Component } from "react";
import Nav from "./Nav";

export default class StockDetail extends Component {
  render() {
    const { }
    return (
      <>
        <Nav />
        <div className="stock-detail" style={{ color: `#${randomColor}` }}>
          <h2>{this.props.stockInfo.symbol}</h2>
          <div className="more-details">
            <h3>Company Name:</h3>
            <h3>Price:</h3>
          </div>
          )}
        </div>
      </>
    );
  }
}
