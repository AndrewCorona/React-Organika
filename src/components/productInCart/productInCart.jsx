import React, { Component } from "react";
import "./productInCart.css";

class ProductInCart extends Component {
  state = {};
  render() {
    return (
      <div className="product-item">
        <img
          src={"/products/" + this.props.data.product.image}
          alt="this is produce"
          className="product-img"
        ></img>
        <div className="product-quantity">{this.props.data.quantity}</div>
        <div className="product-title">{this.props.data.product.title}</div>
        <div className="product-category">{this.props.data.product.category}</div>
        <div className="product-price">{this.props.data.product.price}</div>
      </div>
    );
  }
}

export default ProductInCart;

/**
 * create action REMOVE_PRODUCT
 * dispatch action
 */
