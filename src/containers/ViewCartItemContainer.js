import { Component } from "react";
import ViewCartItem from "../components/ViewCart/ViewCartItem";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class ViewCartItemContainer extends Component {
  render() {
    var {
      productById,
      productInCart,
      onUpdateProductInCart,
      onDeleteProductInCart,
      productsInCart,
    } = this.props;
    return (
      <ViewCartItem
        productById={productById}
        productInCart={productInCart}
        productsInCart={productsInCart}
        onUpdateProductInCart={onUpdateProductInCart}
        onDeleteProductInCart={onDeleteProductInCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateProductInCart: (product) => {
      dispatch(actions.actUpdateProductToCartRequest(product));
    },
    onDeleteProductInCart: (id) => {
      dispatch(actions.actDeleteProductInCartRequest(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCartItemContainer);
