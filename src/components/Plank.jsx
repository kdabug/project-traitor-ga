import React, { Component } from "react";
import RenderStockList from "./RenderStockList";
import Nav from "./Nav";
import Form from "./Form";

class Plank extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="plank-container">
        <Nav />
        <h1>walk the plank</h1>
        <p>in the depths, find yer treasure</p>
        <Form
          onChange={this.props.onChange}
          options={this.props.options}
          showOptions={this.props.showOptions}
          userInput={this.props.userInput}
          filteredOptions={this.props.filteredOptions}
          activeOption={this.props.activeOption}
          onClick={this.props.onClick}
          onSubmit={this.props.onSubmit}
          ticker={this.props.ticker}
        />
        <RenderStockList
          onListChange={this.props.onListChange}
          onListSubmit={this.props.onListSubmit}
          stockList={this.props.stockList}
          stockListInfo={this.props.stockListInfo}
        />
      </div>
    );
  }
}
export default Plank;
