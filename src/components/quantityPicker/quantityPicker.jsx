import React, { Component } from "react";
import "./quantitypicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    minimum: this.props.minimum,
  };

  render() {
    return (
      <div className="quantitypicker">
        <button
          disabled={this.state.quantity === this.state.minimum}
          onClick={this.decrease}
          className="btn btn-sm btn-info custombtn"
        >
        -
        </button>
        <label className="quantity">{this.state.quantity}</label>
        <button onClick={this.increase} className="btn btn-sm btn-info custombtn">
          +
        </button>
      </div>
    );
  }

  increase = () => {
    let current = this.state.quantity;
    current += 1;

    this.setState({ quantity: current });
    this.props.onValueChange(current);
  };

  decrease = () => {
    let current = this.state.quantity;
    if (current !== this.state.minimum){
        current -= 1;
        this.setState({quantity:current});
        this.props.onValueChange(current);
    }
  };
}

export default QuantityPicker;

