import React, { Component } from "react";
import Product from "../product/product";
import ProductService from "./../../services/productService";
import "./catalog.css";

class Catalog extends Component {
  state = {
    categories: [],
    products: [],
    selectedCategory: "",
  };

  render() {
    let prodstoDisplay = this.state.products;

    //filter the prodstodisplay
    if (this.state.selectedCategory !== "") {
      prodstoDisplay = prodstoDisplay.filter(
        (prod) => prod.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">

        <div className="categories">

          <div
            onClick={() => this.selectCategory('')}
            key={''}
            className="btn-category">
                All Products
          </div>

          {this.state.categories.map((category) => 
            <div
              onClick={() => this.selectCategory(category)}
              key={category}
              className="btn-category">
              {category}
            </div>)}
        </div>

        <div>
          {prodstoDisplay.map((p) => <Product data={p} key={p.id}></Product>
          )}
        </div>
      </div>
    );
  }

  selectCategory = (category) => {
    console.log(category);
    this.setState({ selectedCategory: category });
  };

  async componentDidMount() {
    console.log("Load data here");

    let service = new ProductService();
    const data = await service.getProducts();
    this.setState({ products: data });
    console.log(data);

    //identify the unique categories
    let categories = [];

    for (let i = 0; i < data.length; i++) {
      let product = data[i];

      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }

categories = categories.sort();

    this.setState({ categories: categories });
  }
}

export default Catalog;
