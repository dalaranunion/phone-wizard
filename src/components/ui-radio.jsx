import React from "react";
import generateId from "../js/generator--id.js";

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    // get the props as an object and pass it as a state
    // State is used in case we want to change the radio properties halfway
    if (JSON.stringify(props) === "{}") {
      this.state = {};
    } else this.state = props;

    // Generate an ID for a component
    this.id = generateId(5);

    if (!this.state.hasOwnProperty("name")) console.error("No name supplied");
  }
  render() {
    return (
      <label
        className="radiobtn-wrap mb-2 border-radius-3 pt-2 pr-2 pb-2 pl-2 noselect"
        htmlFor={"radio-" + this.id}
      >
        {this.state.label}
        <input
          className="radioBtn"
          type="radio"
          id={"radio-" + this.id}
          name={this.state.name}
          value={this.state.value}
          disabled={this.state.disable}
          required={this.state.required}
          defaultChecked={this.state.preSelected}
        />
      </label>
    );
  }
}

export default RadioButton;
