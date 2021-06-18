import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import ProductItem from "../components/ProductItem/ProductItem";

class ProductItemContainer extends Component {
  render() {
    var {
      product,
      productBySearch,
      onOpenProductModal,
      onQuickViewProductModal,
      onClearKeyword,
    } = this.props;
    return (
      <ProductItem
        product={product}
        productBySearch={productBySearch}
        onOpenProductModal={onOpenProductModal}
        onQuickViewProductModal={onQuickViewProductModal}
        onClearKeyword={onClearKeyword}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenProductModal: () => {
      dispatch(actions.openProductModal());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItemContainer);
