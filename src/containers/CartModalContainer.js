import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import CartModal from "../components/Modal/CartModal/CartModal";

class CartModalContainer extends Component {
  render() {
    var { productsInCart, isDisplayModal, onCloseCartModal } = this.props;
    return (
      <CartModal
        productsInCart={productsInCart}
        isDisplayModal={isDisplayModal}
        onCloseCartModal={onCloseCartModal}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart,
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCloseCartModal: () => {
      dispatch(actions.closeCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModalContainer);
