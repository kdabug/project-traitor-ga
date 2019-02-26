import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import PropTypes from "prop-types";

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
      userInput
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
      <React.Fragment>
        <form className="query-search-form">
          <label htmlFor="userInput">Search by Company Name or Symbol</label>
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            name="userInput"
          />
          <input
            type="submit"
            value="submit"
            onSubmit={onClick}
            className="search-btn"
          />
          <div>{optionList}</div>
        </form>
        {/* <RenderOptionsList
        activeOption={activeOption}
        filteredOptions={filteredOptions}
        showOptions={showOptions}
      /> */}
      </React.Fragment>
    );
  }
}
export default Form;

{
  /* //this autocomplete has been researched - but has focused info from
//https://alligator.io/react/react-autocomplete/ and
//https://blog.bitsrc.io/building-a-react-autocomplete-component-from-scratch-3f4d5618aa14 */
}
