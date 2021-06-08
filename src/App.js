import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* Menu */}
          <Menu />
          {/* Nội dung */}
          <Route path="/" exact component={Home} />
          <Route path="/listProducts" component={Home} />
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
