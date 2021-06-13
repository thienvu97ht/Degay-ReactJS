import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ProductDetailModalContainer from "../../containers/ProductDetailModalContainer";
import TrendingItemContainer from "../../containers/TrendingItemContainer";

class Trending extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
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
        <ProductDetailModalContainer />
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

export default Trending;
