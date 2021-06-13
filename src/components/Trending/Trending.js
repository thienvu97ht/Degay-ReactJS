import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ProductDetailModalContainer from "../../containers/ProductDetailModalContainer";
import TrendingItemContainer from "../../containers/TrendingItemContainer";
import { connect } from "react-redux";
import { actFetchProductsRequest } from "../../actions/index";

class Trending extends Component {
  state = {
    isOpenProductDetail: false,
  };

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  isOpenProductDetail = () => {
    this.setState({ isOpenProductDetail: this.props.isDisplayModal });
  };

  isCloseProductDetail = (params) => {
    this.setState({ isOpenProductDetail: params });
    console.log(params);
  };

  render() {
    var { isOpenProductDetail } = this.state;
    var trendingProducts = this.props.products;
    return (
      <Fragment>
        <div className="container__trending">
          <div className="grid wide">
            <h4 className="app__container-title">Sản phẩm bán chạy</h4>
            <div className="row">
              {this.showTrendingProducts(trendingProducts)}
            </div>
          </div>
        </div>
        <ProductDetailModalContainer
          isOpenProductDetail={isOpenProductDetail}
          isCloseProductDetail={this.isCloseProductDetail}
        />
      </Fragment>
    );
  }

  showTrendingProducts = (trendingProducts) => {
    var result = null;
    if (trendingProducts.length > 0) {
      /* Sắp xếp sản phẩm theo lượt mua */
      var sortBySold = trendingProducts.sort((a, b) => {
        return b.sold - a.sold;
      });

      var sortTrendingProducts = sortBySold.slice(0, 8);

      result = sortTrendingProducts.map((trendingProduct, index) => {
        return (
          <TrendingItemContainer
            key={index}
            trendingProduct={trendingProduct}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
