import React, { Component } from "react";
import "./App.css";
import fetchStockData from "./services/stocks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks = [],
      formQuery = ''
    }
    this.fetchStockData = this.fetchStockData.bind(this);
  }
async componentDidMount(){
  this.fetchStockData
}
  async fetchStocks() {
    const stockData = await fetchStockData();
    console.log(stockData);
    this.setState({
      stocks: stockData,
      formQuery: ""
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <RenderStock stocks={this.props.stocks}/>
        <Footer />
      </div>
    );
  }
}

export default App;
