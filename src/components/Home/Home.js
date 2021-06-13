import React, { Component, Fragment } from "react";
import Slide from "../Slide/Slide";
import TrendingContainer from "../../containers/TrendingContainer";
import News from "../News/News";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Slide />
        <TrendingContainer />
        <News />
      </Fragment>
    );
  }
}

export default Home;
