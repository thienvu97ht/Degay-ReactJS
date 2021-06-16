import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import ProductDetailModal from "../components/Modal/ProductDetailModal/ProductDetailModal";

class ProductDetailModalContainer extends Component {
  render() {
    var { product, isDisplayModal, onCloseProductModal } = this.props;
    return (
      <ProductDetailModal
        product={product}
        isDisplayModal={isDisplayModal}
        onCloseProductModal={onCloseProductModal}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.quickViewProduct,
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
