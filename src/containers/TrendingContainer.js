import React, { Component } from "react";
import Trending from "../components/Trending/Trending";
import { connect } from "react-redux";

class TrendingContainer extends Component {
  render() {
    var { products } = this.props;
    return <Trending products={products} />;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer);
