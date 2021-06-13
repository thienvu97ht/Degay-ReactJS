import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import ProductDetailModal from "../components/Modal/ProductDetailModal/ProductDetailModal";

class ProductDetailModalContainer extends Component {
  render() {
    var { products, isDisplayModal, onCloseProductModal } = this.props;
    return (
      <ProductDetailModal
        products={products}
        isDisplayModal={isDisplayModal}
        onCloseProductModal={onCloseProductModal}
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
    onCloseProductModal: () => {
      dispatch(actions.closeProductModal());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailModalContainer);
