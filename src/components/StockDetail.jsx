import React, { Component } from "react";
import Nav from "./Nav";
import { Route, Link, withRouter } from "react-router-dom";

// tickerInfo: {
//   tickerPrice: 0,
//   companyInfo: {},
//   companyFinancials: {},
//   HistoricalPrices: [],
//   companyPeers: [],
//   companyLogo: {},
//   keyStats: {}
// },
class StockDetail extends Component {
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

  componentDidUpdate(prevProps) {
    if (prevProps.ticker !== this.props.ticker) {
      console.log("FETCHING STOCK", this.props.ticker);
      this.fetchHistoryData();
    }
  }
  render() {
    const { ticker, tickerInfo } = this.props;
    console.log("STOCK DETAIL ticker: ", ticker);
    console.log("STOCK DETAIL tickerInfo: ", tickerInfo);
    console.log("STOCK DETAIL match params: ", this.props.match.params.ticker);
    return (
      <>
        <Nav />
        <div className="stock-detail">
          <div
            className="logo"
            style={{ background: `url(${tickerInfo.companyLogo})` }}
          />
          <div className="stock-detail-info">
            <p>Symbol: {tickerInfo.companyInfo.symbol}</p>
            <p>Name: {tickerInfo.companyInfo.companyName || "no name found"}</p>
            <p>
              Industry: {tickerInfo.companyInfo.industry || "industry unknown"}
            </p>
            <p>
              Description:{" "}
              {tickerInfo.companyInfo.description || "no description found"}
            </p>
            <p>
              Website:{" "}
              {tickerInfo.companyInfo.website ? (
                <a href={tickerInfo.companyInfo.website}>
                  {tickerInfo.companyInfo.website}
                </a>
              ) : (
                "no linked website"
              )}{" "}
            </p>
          </div>

          <div className="stock-price-info">
            <p>Price: ${tickerInfo.tickerPrice || "no price found"}</p>
            <p>
              Year High: $
              <span className="high-price">
                {tickerInfo.keyStats.week52high}
              </span>
            </p>
            <p>
              Year Low: $
              <span className="low-price">{tickerInfo.keyStats.week52low}</span>
            </p>
            <p>Year-to-date change: {tickerInfo.keyStats.ytdChangePercent}%</p>
          </div>

          <button
            className="pretty-button"
            onClick={this.handleShowPeersButton}
          >
            {this.state.showPeers ? "Hide Peers" : "Show Peers"}
          </button>
          {this.state.showPeers && (
            <div className="show-peers">
              <ul className="peers">
                {tickerInfo.companyPeers.map((peer, index) => (
                  <li key={index}>{peer}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            className="card-button"
            onClick={() =>
              this.props.history.push(`/compass/${this.props.stock.symbol}`)
            }
          >
            <h2>Compass</h2>
            <p>Map Stock OverTime</p>
          </button>
        </div>
      </>
    );
  }
}
export default withRouter(StockDetail);
