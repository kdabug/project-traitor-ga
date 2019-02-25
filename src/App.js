import React, { Component } from "react";
import "./App.css";
import { fetchStockSymbols, fetchStockLists } from "./services/stocks";
import Footer from "./components/Footer";
import { Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Chest from "./components/Chest";
import Plank from "./components/Plank";
import Profile from "./components/Profile";
import Records from "./components/Records";
import StockDetails from "./components/StockDetail";
import Compass from "./components/Compass";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      ticker: "",
      stockInfo: [],
      autocompleteOptions: [],
      currentBooty: "",
      transactionHistory: [],
      selectedCompany: ""
    };
    this.fetchStocks = this.fetchStocks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    // e.preventDefault();
    const { name, value } = e.target;
    console.log("target", name);
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { userInput, stockInfo } = this.state;
    const { name, value } = e.target;
    console.log("target", name);
    this.setState({
      [name]: value
    });
    const tickerIndex = stockInfo.filter(
      company => company.name === userInput || company.symbol === userInput
    );
    this.setState = {
      ticker: tickerIndex.symbol
    };
  }
  async componentDidMount() {
    this.fetchStocks();
  }
  async fetchStocks() {
    const stockInfo = await fetchStockSymbols();
    console.log("this is stockInfo", stockInfo);
    const tickerSymbols = stockInfo.map(stock => stock.symbol);
    const companyNames = stockInfo.map(stock => stock.name);
    this.setState({
      stockInfo: stockInfo,
      autocompleteOptions: [...tickerSymbols, ...companyNames],
      formQuery: ""
    });
    console.log("this is autocompleteOptions", this.state.autocompleteOptions);
  }
  render() {
    return (
      <div className="App">
        <main>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <h1>Hello Welcome</h1>
                <Welcome />
              </div>
            )}
          />
          <Route
            path="/chest"
            render={props => (
              <div>
                <h1>Hello Chest</h1>
                <Chest
                  {...props}
                  ticker={this.state.ticker}
                  onSubmit={this.state.handleSubmit}
                  onChange={this.state.handleChange}
                  options={this.state.autocompleteOptions}
                />
              </div>
            )}
          />
          <Route
            path="/plank"
            render={props => (
              <div>
                <h1>Hello Plank</h1>
                <Plank
                  {...props}
                  stockInfo={this.state.stockInfo}
                  ticker={this.state.ticker}
                  onSubmit={this.state.handleSubmit}
                  onChange={this.state.handleChange}
                  options={this.state.autocompleteOptions}
                />
              </div>
            )}
          />
          <Route
            path="/compass"
            render={props => (
              <div>
                <h1>Hello Compass</h1>
                <Compass {...props} />
              </div>
            )}
          />
          <Route
            path="/records"
            render={props => (
              <div>
                <h1>Hello Records</h1>
                <Records {...props} />
              </div>
            )}
          />
          <Route
            path="/profile"
            render={props => (
              <div>
                <h1>Hello Profile</h1>
                <Profile {...props} />
              </div>
            )}
          />
          <Route
            path="/details/:ticker"
            render={props => (
              <div>
                <h1>Hello StockDetails</h1>
                <StockDetails
                  {...props}
                  ticker={this.state.ticker}
                  onSubmit={this.state.handleSubmit}
                  onChange={this.state.handleChange}
                  options={this.state.autocompleteOptions}
                />
              </div>
            )}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
