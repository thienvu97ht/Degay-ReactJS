import React, { Component, Fragment } from "react";
import Trending from "../components/Trending/Trending";
import { connect } from "react-redux";
import { actFetchProductsRequest } from "../actions/index";

class TrendingContainer extends Component {
  render() {
    var { products, fetchAllProducts } = this.props;
    return <Trending products={products} fetchAllProducts={fetchAllProducts} />;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer);
