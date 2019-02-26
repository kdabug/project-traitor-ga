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
      currentBooty: 1000,
      currentInventory: [
        { name: "Apple", ticker: "AAPL", amount: "2" },
        { name: "Apple", ticker: "AAPL", amount: "2" }
      ],
      transactionHistory: [],
      selectedCompany: "",
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: ""
    };
    this.fetchStocks = this.fetchStocks.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQueryClick = this.handleQueryClick.bind(this);
    this.handleQueryKeyDown = this.handleQueryKeyDown.bind(this);
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
                  {...props}
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
