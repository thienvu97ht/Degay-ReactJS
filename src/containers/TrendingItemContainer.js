import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import TrendingItem from "../components/Trending/TrendingItem";

class TrendingItemContainer extends Component {
  render() {
    var { trendingProduct, onOpenProductModal, onQuickViewProductModal } = this.props;
    return (
      <TrendingItem
        trendingProduct={trendingProduct}
        onOpenProductModal={onOpenProductModal}
        onQuickViewProductModal={onQuickViewProductModal}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenProductModal: () => {
      dispatch(actions.openProductModal());
    },
    onQuickViewProductModal: (product) => {
      dispatch(actions.QuickViewProductModal(product));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingItemContainer);
