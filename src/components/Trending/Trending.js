import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ProductDetailModal from "../Modal/ProductDetailModal/ProductDetailModal";
import TrendingItem from "./TrendingItem";
import callApi from "../../utils/apiCaller";

class Trending extends Component {
  state = {
    isOpenProductDetail: false,
    trendingProducts: [],
  };

  componentDidMount() {
    callApi("products", "GET", null).then((res) => {
      this.setState({ trendingProducts: res.data });
    });
  }

  isOpenProductDetail = () => {
    this.setState({ isOpenProductDetail: !this.state.isOpenProductDetail });
  };

  isCloseProductDetail = (params) => {
    this.setState({ isOpenProductDetail: params });
    console.log(params);
  };

  render() {
    var { isOpenProductDetail, trendingProducts } = this.state;
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

        <ProductDetailModal
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
        return <TrendingItem key={index} trendingProduct={trendingProduct} />;
      });
    }
    return result;
  };
}

export default Trending;
