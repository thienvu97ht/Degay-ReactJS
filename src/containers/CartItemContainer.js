import { Component } from "react";
import { connect } from "react-redux";
// import * as actions from "../actions/index";
import Cartitem from "../components/Modal/CartModal/CartItem";

class CartItemContainer extends Component {
  render() {
    var { productById, productInCart, productsInCart } = this.props;
    return (
      <Cartitem
        productById={productById}
        productInCart={productInCart}
        productsInCart={productsInCart}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);
