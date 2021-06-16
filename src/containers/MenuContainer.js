import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Menu from "../components/Menu/Menu";

class MenuContainer extends Component {
  render() {
    var { onOpenCartModal, onOpenMenuModal, onOpenSerchModal, fetchAllProducts, productsInCart } = this.props;
    return (
      <Menu
        onOpenCartModal={onOpenCartModal}
        onOpenMenuModal={onOpenMenuModal}
        onOpenSerchModal={onOpenSerchModal}
        fetchAllProducts={fetchAllProducts}
        productsInCart={productsInCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenCartModal: () => {
      dispatch(actions.openCart());
    },
    onOpenMenuModal: () => {
      dispatch(actions.openMenu());
    },
    onOpenSerchModal: () => {
      dispatch(actions.openSearch());
    },
    fetchAllProducts: () => {
      dispatch(actions.actFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
