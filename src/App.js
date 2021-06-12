import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./constants/ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* Menu */}
          <Menu />
          {/* Nội dung */}
          <ScrollToTop>
            <Switch>{this.showContentMenus(routes)}</Switch>
          </ScrollToTop>
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}
export default App;
