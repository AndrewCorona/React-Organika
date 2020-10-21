import React, { Component } from 'react';
import QuantityPicker from './../quantityPicker/quantityPicker';
import "./product.css";

class Product extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="product">
                <div className="Image">
                <img src="https://picsum.photos/250/200" alt="this is produce image"></img>
                </div>

                <div className="Title">
                <p>Lettuce</p>
                </div>

                <div className="Price">
                <p className="itemprice">$9.99</p>    
                <p className="quantityprice">$99.99</p>
               </div>

                <div className="quantitybox">
                <QuantityPicker></QuantityPicker>
                <button className="btn btn-sm btn-info addbtn">Add</button>
                </div>

            </div>
         );
    }
}
 
export default Product;