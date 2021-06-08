import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";
import Trending from "./components/Trending/Trending";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          {/* Nav bar */}
          <Menu />
          {/* Slider */}
          <Slider />
          {/* End Slide */}
        </div>
        {/* Sản phẩm bán chạy */}
        <Trending />
        {/* Tin tức */}
        <News />
        <Footer />
      </div>
    );
  }
}
export default App;
