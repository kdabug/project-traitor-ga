import React, { Component } from "react";
import RenderStockList from "./RenderStockList";
import Nav from "./Nav";
import { fetchStockLists } from "../services/stocks";
import DisplayStockList from "./DisplayStockList";
import Form from "./Form";

class Plank extends Component {
  constructor() {
    super();
    this.state = {
      listSelect: "",
      stockList: []
    };
    this.handleListSubmit = this.handleListSubmit.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
  }
  handleListChange(e) {
    // e.preventDefault();
    const { name, value } = e.target;
    console.log("target", name);
    this.setState({
      [name]: value
    });
  }
  async handleListSubmit(e) {
    e.preventDefault();
    // this.setState = {
    //   listSelect: this.state.listSelect
    // };
    const newList = await fetchStockLists(this.state.listSelect);
    this.setState({
      stockList: newList
    });
  }

  render() {
    return (
      <div className="plank-container">
        <Nav />
        <h1>walk the plank</h1>
        <p>in the depths, find yer treasure</p>
        <Form
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
          options={this.props.options}
          showOptions={this.props.showOptions}
          userInput={this.props.userInput}
          filteredOptions={this.props.filteredOptions}
          activeOption={this.props.activeOption}
          onClick={this.props.onClick}
        />
        <RenderStockList
          onChange={this.state.handleListChange}
          onSubmit={this.state.handleListSubmit}
          stockList={this.state.stockList}
        />
        <DisplayStockList stockList={this.props.stockList} />
      </div>
    );
  }
}
export default Plank;
