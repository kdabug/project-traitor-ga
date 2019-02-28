import React, { Component } from "react";
import Nav from "./Nav";
import { Chart } from "react-charts";
import fetchHistoricalPrices from "../services/stocks";
import Form from "./Form";
class Compass extends Component {
  constructor() {
    super();
    this.state = {
      historicalPrices: []
    };
    // this.fetchHistoryData = this.fetchHistoryData.bind(this);
  }

  // async fetchHistoryData(e) {
  //   e.preventDefault();
  //   this.props.
  //   const historicalPrices = await fetchHistoricalPrices(
  //     this.props.match.params.ticker,
  //     "1d"
  //   );
  //   console.log("compass historical prices", historicalPrices);
  //   this.setState((prevState, newState) => ({
  //     historicalPrices: historicalPrices
  //   }));
  // }

  async componentDidMount() {
    if (this.props.match.params.ticker) {
      const historicalPrices = await fetchHistoricalPrices(
        this.props.match.params.ticker,
        "1d"
      );
      console.log("compass historical prices", historicalPrices);
      this.setState((prevState, newState) => ({
        historicalPrices: historicalPrices
      }));
    } else {
      const historicalPrices = await fetchHistoricalPrices("AAPL", "1d");
      const chartData = historicalPrices.map((timeStamp, el) => {
        return {
          x: timestamp
        };
      });
      console.log("compass historical prices", historicalPrices);
      this.setState((prevState, newState) => ({
        historicalPrices: historicalPrices
      }));
    }
  }
  render() {
    const lineChart = (
      <div
        style={{
          width: "400px",
          height: "300px"
        }}
      >
        <Chart
          data={[
            {
              label: "Series 1",
              data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
              label: "Series 2",
              data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
          ]}
          axes={[
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" }
          ]}
        />
      </div>
    );
    return (
      <div className="compass-container">
        <Nav />
        <h1>the Compass</h1>
        <p>
          red skies at morn, traitors take warn <br /> red skies at night,
          traitors delight
        </p>
        <Form
          onChange={this.props.onChange}
          options={this.props.options}
          showOptions={this.props.showOptions}
          userInput={this.props.userInput}
          filteredOptions={this.props.filteredOptions}
          activeOption={this.props.activeOption}
          onClick={this.props.onClick}
          onSubmit={this.props.onCompassSubmit}
          ticker={this.props.ticker}
        />
        <div className="chart-container">{lineChart}</div>
      </div>
    );
  }
}

export default Compass;
