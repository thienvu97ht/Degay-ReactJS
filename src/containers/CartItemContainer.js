import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Cartitem from "../components/Modal/CartModal/CartItem";

class CartItemContainer extends Component {
  render() {
    var {
      productById,
      productInCart,
      productsInCart,
      onUpdateProductInCart,
      onDeleteProductInCart,
    } = this.props;
    return (
      <Cartitem
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);
