import { Component } from "react";
import { connect } from "react-redux";
// import * as actions from "../actions/index";
import ListProducts from "../components/ListProducts/ListProducts";

class ListProductsContainer extends Component {
  render() {
    var { keyword, products } = this.props;
    return <ListProducts keyword={keyword} products={products} />;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    keyword: state.keyword,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProductsContainer);
