import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="jumbotron">
  <h1 className="display-4">Organika Home</h1>
  <p className="lead">This is a organic foods website</p>
  <hr className="my-4"></hr>
  <p>It's really good food</p>
  <Link className="btn btn-primary btn-lg" to="/catalog" role="button">Our catalog</Link>
</div>
         );
    }
}
 
export default Home;