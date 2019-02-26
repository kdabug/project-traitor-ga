import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";

class Form extends Component {
  render() {
    // propTypes = {
    //   options: PropTypes.instanceOf(Array).isRequired
    // };
    const {
      onChange,
      onClick,
      onKeyDown,
      activeOption,
      filteredOptions,
      showOptions,
      userInput,
      onSubmit,
      ticker
    } = this.props;

    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }

    return (
      <div className="form-query">
        <form id="query-search-form">
          <label htmlFor="userInput">Search by Company Name or Symbol</label>
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            onSubmit={onSubmit}
            name="userInput"
          />
        </form>
        <button
          form="query-search-form"
          type="submit"
          value="submit"
          onClick={onSubmit}
          className="search-btn"
        >
          <Link to={`/details/hi`} className="more-details-button">
            Submit
          </Link>
        </button>
        <div className="options">{optionList}</div>
      </div>
    );
  }
}
export default Form;

{
  /* //this autocomplete has been researched - but has focused info from
//https://alligator.io/react/react-autocomplete/ and
//https://blog.bitsrc.io/building-a-react-autocomplete-component-from-scratch-3f4d5618aa14 */
}
