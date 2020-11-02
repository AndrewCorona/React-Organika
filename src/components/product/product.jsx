import React, { Component } from "react";
import QuantityPicker from "./../quantityPicker/quantityPicker";
import "./product.css";
import { connect } from 'react-redux';
import {addProductToCart} from '../../store/actions/actions';

class Product extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="product">
        <div className="Image">
          <a href="/#">
            <img
              src={"/products/" + this.props.data.image}
              alt="this is produce"
              className="productimg"
            ></img>
          </a>
        </div>

        <div className="title-box">
          <div className="Title">
            <p className="titleitem">
              <a href="/#">{this.props.data.title}</a>
            </p>
          </div>

          <div className="Price">
            <p className="itemprice">${this.props.data.price}</p>
            <p className="quantityprice">Total:${this.getTotal()}</p>
          </div>

          <div className="quantitybox">
            <QuantityPicker
              minimum={this.props.data.minimum || 1}
              onValueChange={(qnty) => this.handleQuantityChange(qnty)}
            ></QuantityPicker>
            <button onClick={this.addToCartButton} className="btn btn-sm btn-info addbtn">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }

  getTotal = () => {
    let total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (quantity) => {
    console.log("Quantity Changed", quantity);
    this.setState({ quantity: quantity });
  };

  addToCartButton = () => {

    const addedProduct = {
      product: this.props.data,
      quantity: this.state.quantity
    };
    this.props.addProductToCart(addedProduct);
  };
}

export default connect(null, {addProductToCart}) (Product);
