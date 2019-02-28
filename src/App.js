import React, { Component } from "react";
import "./App.css";
import {
  fetchTickerPrice,
  fetchCompanyInfo,
  fetchCompanyFinancials,
  fetchCompanyPeers,
  fetchCompanyLogo,
  fetchCompanyKeyStats,
  fetchStockSymbols,
  fetchStockLists
} from "./services/stocks";
import Footer from "./components/Footer";
import { Route, Link, withRouter } from "react-router-dom";
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
      tickerInfo: {
        tickerPrice: 0,
        companyInfo: {},
        companyFinancials: {},
        companyPeers: [],
        companyLogo: {},
        keyStats: {}
      },

      currentBooty: 1000,
      currentInventory: [
        { name: "Apple", ticker: "AAPL", amount: "2" },
        { name: "Apple", ticker: "AAPL", amount: "2" }
      ],
      transactionHistory: [],

      stockInfo: [],
      userInput: "",
      autocompleteOptions: [],
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,

      listSelect: "",
      stockList: []
    };

    this.handleListSubmit = this.handleListSubmit.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.fetchSpecificTickerInfo = this.fetchSpecificTickerInfo.bind(this);
    this.handleDetailSubmit = this.handleDetailSubmit.bind(this);
    this.handleCompassSubmit = this.handleCompassSubmit.bind(this);
    this.fetchStocks = this.fetchStocks.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleQueryKeyDown = this.handleQueryKeyDown.bind(this);
  }

  async fetchSpecificTickerInfo(ticker) {
    const tickerPrice = await fetchTickerPrice(ticker);
    const companyFinancials = await fetchCompanyFinancials(ticker);
    const companyInfo = await fetchCompanyInfo(ticker);
    const companyPeers = await fetchCompanyPeers(ticker);
    const companyLogo = await fetchCompanyLogo(ticker);
    const keyStats = await fetchCompanyKeyStats(ticker);
    this.setState({
      tickerInfo: {
        tickerPrice: tickerPrice,
        companyInfo: companyInfo,
        companyFinancials: companyFinancials,
        companyPeers: companyPeers,
        companyLogo: companyLogo,
        keyStats: keyStats
      }
    });
  }

  handleListChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("target", name);
    this.setState({
      [name]: value
    });
  }
  async handleListSubmit(e) {
    e.preventDefault();
    const newList = await fetchStockLists(this.state.listSelect);
    console.log("this is the list data: newList", newList);
    this.setState({
      stockList: newList
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

  handleQueryClick(e) {
    e.preventDefault();
    console.log(
      "this is handlequeryclick: e.currentTarget.innerText",
      e.currentTarget.innerText
    );
    const userInput = e.currentTarget.innerText;
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: userInput
    });
  }

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

  handleDetailSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("target", name, value);
    this.setState((prevState, newState) => ({
      [name]: value
    }));
    const { userInput, stockInfo } = this.state;
    const tickerIndex = stockInfo.filter(
      stock =>
        stock.name.toLowerCase() === userInput.toLowerCase() ||
        stock.symbol.toLowerCase() === userInput.toLowerCase()
    );

    console.log("tickerIndex", tickerIndex);
    // debugger;
    const newTicker = tickerIndex[0].symbol;
    this.setState((prevState, newState) => ({
      ticker: newTicker,
      userInput: ""
    }));
    this.props.history.push(`/details/${newTicker}`);
  }

  handleCompassSubmit(e) {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("target", name);
    this.setState((prevState, newState) => ({
      [name]: value
    }));
    const { userInput, stockInfo } = this.state;
    const tickerIndex = stockInfo.filter(
      stock =>
        stock.name.toLowerCase() === userInput.toLowerCase() ||
        stock.symbol.toLowerCase() === userInput.toLowerCase()
    );
    // debugger;
    const newTicker = tickerIndex[0].symbol;
    this.setState((prevState, newState) => ({
      ticker: newTicker,
      userInput: ""
    }));
    this.props.history.push(`/compass/${newTicker}`);
  }

  async componentDidMount() {
    this.fetchStocks();
  }

  async fetchStocks() {
    const stockInfo = await fetchStockSymbols();
    console.log("this is stockInfo", stockInfo);
    const tickerSymbols = stockInfo.map(stock => stock.symbol);
    const companyNames = stockInfo.map(stock => stock.name);
    const newList = await fetchStockLists(this.state.listSelect);
    this.setState({
      stockInfo: stockInfo,
      autocompleteOptions: [...tickerSymbols, ...companyNames],
      formQuery: "",
      stockList: newList
    });
    console.log("this is autocompleteOptions", this.state.autocompleteOptions);
  }

  render() {
    console.log("app props: ", this.props);
    return (
      <div className="App">
        <main>
          <Route exact path="/" render={() => <Welcome />} />
          <Route
            path="/chest"
            render={props => (
              <Chest
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
            )}
          />
          <Route
            path="/plank"
            render={props => (
              <Plank
                stockInfo={this.state.stockInfo}
                ticker={this.state.ticker}
                onKeyDown={this.handleQueryKeyDown}
                onChange={this.handleQueryChange}
                onClick={this.handleQueryClick}
                onDetailSubmit={this.handleDetailSubmit}
                onCompassSubmit={this.handleCompassSubmit}
                showOptions={this.state.showOptions}
                userInput={this.state.userInput}
                filteredOptions={this.state.filteredOptions}
                activeOption={this.state.activeOption}
                onListChange={this.handleListChange}
                onListSubmit={this.handleListSubmit}
                stockList={this.state.stockList}
                listSelect={this.state.listSelect}
              />
            )}
          />
          <Route
            path="/compass"
            render={props => (
              <Compass
                ticker={this.state.ticker}
                fetchSpecificTickerInfo={this.fetchSpecificTickerInfo}
                tickerInfo={this.state.tickerInfo}
                stockInfo={this.state.stockInfo}
                onKeyDown={this.handleQueryKeyDown}
                onChange={this.handleQueryChange}
                onClick={this.handleQueryClick}
                onDetailSubmit={this.handleDetailSubmit}
                onCompassSubmit={this.handleCompassSubmit}
                showOptions={this.state.showOptions}
                userInput={this.state.userInput}
                filteredOptions={this.state.filteredOptions}
                activeOption={this.state.activeOption}
              />
            )}
          />
          <Route path="/records" render={() => <Records />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/details/:ticker"
            render={props => {
              console.log("DETAIL TICKER: ", this.state.ticker);
              return (
                <StockDetails
                  {...props}
                  ticker={this.state.ticker}
                  fetchSpecificTickerInfo={this.fetchSpecificTickerInfo}
                  tickerInfo={this.state.tickerInfo}
                />
              );
            }}
          />
        </main>
        <Footer show={!this.props.match.isExact} />
      </div>
    );
  }
}

export default withRouter(App);
