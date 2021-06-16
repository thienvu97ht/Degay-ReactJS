import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import ProductDetailModal from "../components/Modal/ProductDetailModal/ProductDetailModal";

class ProductDetailModalContainer extends Component {
  render() {
    var {
      product,
      productsInCart,
      isDisplayModal,
      onCloseProductModal,
      onAddProductInCart,
      onUpdateProductInCart,
    } = this.props;

    return (
      <ProductDetailModal
        product={product}
        productsInCart={productsInCart}
        isDisplayModal={isDisplayModal}
        onCloseProductModal={onCloseProductModal}
        onAddProductInCart={onAddProductInCart}
        onUpdateProductInCart={onUpdateProductInCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart,
    product: state.quickViewProduct,
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCloseProductModal: () => {
      dispatch(actions.closeProductModal());
    },
    onAddProductInCart: (product) => {
      dispatch(actions.actonAddProductToCartRequest(product));
    },
    onUpdateProductInCart: (product) => {
      dispatch(actions.actUpdateProductToCartRequest(product));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailModalContainer);
