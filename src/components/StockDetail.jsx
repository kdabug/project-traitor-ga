import React, { Component } from "react";
import Nav from "./Nav";

export default class StockDetail extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="stock-detail">Hello Stock Detail</div>
      </>
    );
  }
}
