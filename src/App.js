import React, { Component } from "react";
import "./App.css";
import {
  fetchTickerPrice,
  fetchCompanyInfo,
  fetchCompanyFinancials,
  fetchHistoricalPrices,
  fetchCompanyPeers,
  fetchCompanyLogo,
  fetchCompanyKeyStats,
  fetchStockSymbols,
  fetchStockLists
} from "./services/stocks";
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
      ticker: "",
      tickerPrice: 0,
      tickerInfo: [],
      companyInfo: {},
      companyFinancials: {},
      HistoricalPrices: [],
      companyPeers: [],
      companyLogo: {},
      keyStats: {},

      currentBooty: 1000,
      currentInventory: [
        { name: "Apple", ticker: "AAPL", amount: "2" },
        { name: "Apple", ticker: "AAPL", amount: "2" }
      ],
      transactionHistory: [],

      stockInfo: [],
      stockList: [],

      userInput: "",
      autocompleteOptions: [],
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: ""
    };
    this.updateTickerInfo = this.updateTickerInfo.bind(this);
    this.fetchSpecificTickerInfo = this.fetchSpecificTickerInfo.bind(this);
    this.fetchStocks = this.fetchStocks.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleQueryKeyDown = this.handleQueryKeyDown.bind(this);
  }

  updateTickerInfo = companyId => {
    const { stockInfo } = this.state;
    const ticker = stockInfo.map(stock => {
      if (stock.name === companyId || stock.symbol === companyId) {
        return stock.symbol;
      }
    });
    this.setState({
      ticker: ticker
    });
    this.fetchSpecificTickerInfo();
  };

  async fetchSpecificTickerInfo() {
    const { ticker } = this.state.ticker;
    const tickerPrice = await fetchTickerPrice(ticker);
    const companyFinancials = await fetchCompanyInfo(ticker);
    const companyInfo = await fetchCompanyInfo(ticker);
    const companyPeers = await fetchCompanyPeers(ticker);
    const companyLogo = await fetchCompanyLogo(ticker);
    const keyStats = await fetchCompanyKeyStats(ticker);
    this.setState({
      tickerPrice: tickerPrice,
      companyInfo: companyInfo,
      companyFinancials: companyFinancials,
      companyPeers: companyPeers,
      companyLogo: companyLogo,
      keyStats: keyStats
    });
  }

  handleQueryChange = e => {
    const { autocompleteOptions } = this.state;
    const userInput = e.currentTarget.value;
    console.log("this is userInput", userInput);
    const filteredOptions = autocompleteOptions.filter(
      option => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    console.log("this is handleQueryChange: filteredOptions", filteredOptions);
    this.setState({
      activeOption: 0,
      filteredOptions: filteredOptions,
      showOptions: true,
      userInput: userInput
    });
  };

  handleQueryClick = e => {
    e.preventDefault();
    console.log("this is handlequeryclick: userInput", this.state.userInput);
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
    this.updateTickerInfo(this.state.userInput);
    // take userInput and check it against values in stock info
    //use stock info to find ticker symbol
    //use tickersymbol to fetch stock info
    //open detail page with (possible helper function to pass into other functions)
  };

  handleQueryKeyDown = e => {
    const { activeOption, filteredOptions } = this.state;
    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption - 1 === filteredOptions.length) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  // handleChange(e) {
  //   // e.preventDefault();
  //   const { name, value } = e.target;
  //   console.log("target", name);
  //   this.setState({
  //     [name]: value
  //   });
  // }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   const { userInput, stockInfo } = this.state;
  //   const { name, value } = e.target;
  //   console.log("target", name);
  //   this.setState({
  //     [name]: value
  //   });
  //   const tickerIndex = stockInfo.filter(
  //     company => company.name === userInput || company.symbol === userInput
  //   );
  //   this.setState = {
  //     ticker: tickerIndex.symbol
  //   };
  // }
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
                  currentBooty={this.state.currentBooty}
                  currentInventory={this.state.currentInventory}
                  stockInfo={this.state.stockInfo}
                  ticker={this.state.ticker}
                  onKeyDown={this.handleQueryKeyDown}
                  onChange={this.handleQueryChange}
                  onClick={this.handleQueryClick}
                  showOptions={this.state.showOptions}
                  userInput={this.state.userInput}
                  filteredOptions={this.state.filteredOptions}
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
                  stockInfo={this.state.stockInfo}
                  ticker={this.state.ticker}
                  onKeyDown={this.handleQueryKeyDown}
                  onChange={this.handleQueryChange}
                  onClick={this.handleQueryClick}
                  showOptions={this.state.showOptions}
                  userInput={this.state.userInput}
                  filteredOptions={this.state.filteredOptions}
                  activeOption={this.state.activeOption}
                />
              </div>
            )}
          />
          <Route
            path="/compass"
            render={() => (
              <div>
                <h1>Hello Compass</h1>
                <Compass />
              </div>
            )}
          />
          <Route
            path="/records"
            render={() => (
              <div>
                <h1>Hello Records</h1>
                <Records />
              </div>
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <div>
                <h1>Hello Profile</h1>
                <Profile />
              </div>
            )}
          />
          <Route
            path="/details/:ticker"
            render={props => (
              <div>
                <h1>Hello StockDetails</h1>
                <StockDetails
                  ticker={this.state.ticker}
                  stockInfo={this.state.stockInfo}
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
