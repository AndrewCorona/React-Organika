import React from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import QuantityPicker from "./components/quantityPicker/quantityPicker";


function App() {
  return (
    <div className="App">

    <NavBar></NavBar>

    <div className="container">
      <h1>Hello There</h1>
      <br />
      <br />
      <QuantityPicker></QuantityPicker>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
