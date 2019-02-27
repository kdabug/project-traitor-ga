import React, { Component } from "react";
import Nav from "./Nav";

// tickerInfo: {
//   tickerPrice: 0,
//   companyInfo: {},
//   companyFinancials: {},
//   HistoricalPrices: [],
//   companyPeers: [],
//   companyLogo: {},
//   keyStats: {}
// },

export default class StockDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPeers: false
    };
    this.handleShowPeersButton = this.handleShowPeersButton.bind(this);
  }
  handleShowPeersButton(e) {
    e.preventDefault();
    this.setState(prevState => ({ showPeers: !prevState.showPeers }));
  }
  async componentDidMount() {
    await this.props.fetchSpecificTickerInfo(this.props.match.params.ticker);
  }
  render() {
    const { ticker, tickerInfo } = this.props;
    console.log("STOCK DETAIL: ", ticker);
    return (
      <>
        <Nav />
        <div className="stock-detail">
          <h1>{ticker}</h1>
          <p>Symbol: {ticker}</p>
          <p>Name: {tickerInfo.companyInfo.companyName}</p>
          <p>Price: {tickerInfo.tickerPrice}</p>
          <div style={{ background: `url(${tickerInfo.companyLogo})` }} />
          <p>CEO: {tickerInfo.companyInfo.ceo}</p>
          <p>Industry: {tickerInfo.companyInfo.industry}</p>
          <p>Description: {tickerInfo.companyInfo.description}</p>
          <button
            className="pretty-button"
            onClick={this.handleShowPeersButton}
          >
            {this.state.showPeers ? "Hide Peers" : "Show Peers"}
          </button>
          {this.state.showPeers && (
            <div className="show-peers">
              <ul>
                {tickerInfo.companyPeers.map((peer, index) => (
                  <li key={index}>{peer}</li>
                ))}
              </ul>
            </div>
          )}
          <p>
            Website:{" "}
            <a href={tickerInfo.companyInfo.website}>
              {tickerInfo.companyInfo.website}
            </a>{" "}
          </p>
          <p>Name: {tickerInfo.companyName}</p>
          <button>
            <h2>Compass</h2>
            <p>Map Stock OverTime</p>
          </button>
        </div>
      </>
    );
  }
}
