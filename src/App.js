import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ListProducts from "./components/ListProducts/ListProducts";
import Stores from "./components/Stores/Stores";
import About from "./components/About/About";
import Search from "./components/Search/Search";
import ViewCart from "./components/ViewCart/ViewCart";
import Account from "./components/Account/Account";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import TestSlide from "./components/TestSlider/TestSlider";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* Menu */}
          <Menu />
          {/* Nội dung */}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/listProducts" component={ListProducts} />
          <Route path="/stores" component={Stores} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
          <Route path="/view-cart" component={ViewCart} />
          <Route path="/account" component={Account} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/test" component={TestSlide} />
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
