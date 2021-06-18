import { Component } from "react";
import ViewCart from "../components/ViewCart/ViewCart";
import { connect } from "react-redux";
// import * as actions from "../actions/index";

class ViewCartContainer extends Component {
  render() {
    var { productsInCart, products } = this.props;
    return <ViewCart productsInCart={productsInCart} products={products} />;
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart,
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartContainer);
