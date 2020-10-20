import React, { Component } from 'react';
import "./quantitypicker.css";

class QuantityPicker extends Component {
    state = {
        quantity: 1
    };


    render() { 
        return (
        <div>
            <button onClick={this.decrease} className="btn btn-sm btn-info">-</button>
            <label className="quantity">{this.state.quantity}</label>
            <button onClick={this.increase} className="btn btn-sm btn-info">+</button>
        </div>
        );
    }

    increase = () => {
        console.log("The user clicked +");

        let val = this.state.quantity;
        val += 1;

        this.setState({quantity:val});
    };

    decrease = () => {
        console.log("The user clicked -");

        let val = this.state.quantity;
        val -= 1;

        this.setState({quantity:val});
    };
}
 
export default QuantityPicker;

//es6 topics
//arow function
//array filter
//array map
//spread operator
//object desctructoring