import React, { Component, Fragment } from "react";
import Slider from "../Slider/Slider";
import Trending from "../Trending/Trending";
import News from "../News/News";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Slider />
        <Trending />
        <News />
      </Fragment>
    );
  }
}

export default Home;
