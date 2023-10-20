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
      <div className={`prod-container-wrap ${this.props.className}`}>
        <div className="prod-img-ctr">
          <img className="prod-img object-fit-cover" src="https://shorturl.at/fxBR3" />
        </div>
        <div className="prod-header pt-1 pb-2 pr-1 pl-1">
          <div className="prod-name-ctr">
            <h4 className="prod-subtitle overline">{this.data.scientific_name}</h4>
            <h2 className="prod-title heading-font heading-md">{this.data.name}</h2>
          </div>
          <div className="prod-price-ctr ta-end">
            <div className="prod-price-from heading-xsm heading-font">From</div>
            <div className="prod-price">
              <span className="price-currency">£</span>
              <span className="price-price heading-lg">{this.data.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCC;
