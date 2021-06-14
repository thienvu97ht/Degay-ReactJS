import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import CartModal from "../components/Modal/CartModal/CartModal";

class CartModalContainer extends Component {
  render() {
    var {
      products,
      productsInCart,
      isDisplayModal,
      onCloseCartModal,
      fetchAllProductsInCart,
    } = this.props;
    return (
      <CartModal
        products={products}
        productsInCart={productsInCart}
        isDisplayModal={isDisplayModal}
        onCloseCartModal={onCloseCartModal}
        fetchAllProductsInCart={fetchAllProductsInCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart,
    products: state.products,
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCloseCartModal: () => {
      dispatch(actions.closeCart());
    },
    fetchAllProductsInCart: () => {
      dispatch(actions.actFetchProductsInCartRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModalContainer);
