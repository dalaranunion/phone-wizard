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

    if (this.state.hasOwnProperty("name")) console.error("No name supplied");
    if (!this.state.hasOwnProperty("key")) {
      this.key = generateId(5);
    } else this.key = this.props.key;
  }
  render() {
    return (
      <div className="radiobtn-wrap">
        {this.state.hasOwnProperty("label") ? (
          <label class="form-label" for={"radio-" + this.id}>
            {this.state.label}
          </label>
        ) : (
          ""
        )}
        <input
          className="form-radio"
          type="radio"
          id={"radio-" + this.id}
          name={this.state.name}
          value={this.state.value}
          disabled={this.state.disable}
        />
        ;
      </div>
    );
  }
}

export default RadioButton;
