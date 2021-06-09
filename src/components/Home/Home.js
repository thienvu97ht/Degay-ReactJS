import React, { Component, Fragment } from "react";
import Slide from "../Slide/Slide";
import Trending from "../Trending/Trending";
import News from "../News/News";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Slide />
        <Trending />
        <News />
      </Fragment>
    );
  }
}

export default Home;
