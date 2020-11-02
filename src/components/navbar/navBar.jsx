import React, {Component} from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class NavBar extends Component{
render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand" to="/#">
        Home
      </Link>
      <Link className="navbar-brand" to="/catalog">
        Catalog
      </Link>
      <Link className="navbar-brand" to="/todo">
        Todo List
      </Link>
      <div className="form-inline my-2 my-lg-0">
        <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
          <i class="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
          {this.props.test}
          <span class="badge badge-primary cart-badge">{this.props.count}</span>
        </Link>
      </div>
    </nav>
  );
}

}

const mapStateToProps = (state) => {
  return {
    test: 'View Cart',
    count: state.cart.length,
  }
};

export default connect(mapStateToProps,null) (NavBar);
