import React, { Component } from "react";
class CurrenciesSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.setCurrentCurrencyType(event.target.value);
  }
  render() {
    const { currenciesTypes } = this.props;

    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          {currenciesTypes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default CurrenciesSelect;
