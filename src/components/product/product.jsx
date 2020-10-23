import React, { Component } from 'react';
import QuantityPicker from './../quantityPicker/quantityPicker';
import "./product.css";

class Product extends Component {
    state = { 
        quantity: 1
     };

    render() { 
        return ( 
            <div className="product">
                <div className="Image">
                <a href="/#"><img src={"/products/" + this.props.data.image} alt="this is produce" className="productimg"></img></a>
                </div>


                <div className="Title">
                <p className="titleitem"><a href="/#">{this.props.data.title}</a></p>
                </div>

                <div className="Price">
                <p className="itemprice">${this.props.data.price}</p>    
                <p className="quantityprice">Total:${this.props.data.price * this.state.quantity}</p>
               </div>

                <div className="quantitybox">
                <QuantityPicker 
                minimum={this.props.data.minimum || 1} 
                onValueChange={(qnty) => this.handleQuantityChange(qnty)}>

                </QuantityPicker>
                <button className="btn btn-sm btn-info addbtn">Add to cart</button>
                </div>

            </div>
         );
    }

    handleQuantityChange = (quantity) => {
        console.log("Quantity Changed", quantity);
        this.setState({quantity: quantity});
    };
}
 
export default Product;