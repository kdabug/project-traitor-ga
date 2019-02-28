import React, { Component } from "react";
import Nav from "./Nav";
//import { LineChart } from "react-easy-chart";
import fetchHistoricalPrices from "../services/stocks";
import Form from "./Form";
import { Route, Link, withRouter } from "react-router-dom"; //import Tooltip from "@material-ui/core/Tooltip";

import ReactChartkick, { LineChart, PieChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);
class Compass extends Component {
  constructor() {
    super();
    this.state = {
      historicalPrices: [],
      chartData: [],
      testTicker: null
    };
    this.compileChartData = this.compileChartData.bind(this);
    this.fetchHistoryData = this.fetchHistoryData.bind(this);
  }

  async fetchHistoryData() {
    const tickerVal = this.props.ticker ? this.props.ticker : "AAPL";

    const historicalPrices = await fetchHistoricalPrices(tickerVal, "1d");
    // console.log("compass historical prices", historicalPrices);
    this.setState((prevState, newState) => ({
      historicalPrices: historicalPrices
    }));
    if (this.state.historicalPrices.length) {
      this.compileChartData();
    }
  }

  async componentDidMount() {
    this.fetchHistoryData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ticker !== this.props.ticker) {
      console.log("FETCHING HISTORY DATA!", this.props.ticker);
      this.fetchHistoryData();
    }
  }

  compileChartData() {
    const chartData = this.state.historicalPrices.map((timeStamp, el) => [
      timeStamp.label,
      timeStamp.average
    ]);
    this.setState((prevState, newState) => ({
      chartData: chartData
    }));
    console.log("chartData", chartData);
  }

  render() {
    const lineChart = (
      <div>
        <LineChart
          data={this.state.chartData}
          min={null}
          max={null}
          width={"800px"}
          height={"400px"}
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

export default withRouter(Compass);
