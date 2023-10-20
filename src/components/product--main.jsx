import React from "react";

class ProductCC extends React.Component {
  constructor(props) {
    super(props);
    // get the props as an object and pass it as a state
    // State is used in case we want to change the radio properties halfway

    this.data = this.props.data;
    console.log(this.props.data);
  }
  render() {
    return (
      <div className="prod-container-wrap">
        <div className="image-container">
          <img className="prod-img" src={this.data.image_url} />
          <heaher>
            <h2 className="prod-title">
              {this.data.name} <em>{this.data.scientific_name}</em>
            </h2>
          </heaher>
        </div>
      </div>
    );
  }
}

export default ProductCC;
