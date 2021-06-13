import { Component } from "react";

class TrendingItem extends Component {
  isOpenProductDetail = () => {
    this.props.onOpenProductModal();
  };
  render() {
    var { trendingProduct } = this.props;
    return (
      <div className="col l-3 m-6 c-10 c-o-1">
        <div className="container__trending-item">
          <div className="container__trending-img">
            <img
              src={trendingProduct.images[0].src}
              alt=""
              className="container__trending-img1"
            />
            <img
              src={trendingProduct.images[1].src}
              alt=""
              className="container__trending-img2"
            />
          </div>
          <button onClick={this.isOpenProductDetail} className="quick-view-btn">
            <i
              className="icon-eye ti-eye hide-on-mobile-tablet"
              title="Xem nhanh"
            />
          </button>
          <button className="add-cart-btn">
            <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
          </button>
        </div>
        <div className="product-name-box text-center">
          <a href="!#" className="product-name">
            {trendingProduct.name}
          </a>
        </div>
        <div className="product-price text-center">
          <p className="product-price-number">290,000</p>
          <p className="currency-unit">đ</p>
        </div>
      </div>
    );
  }
}

export default TrendingItem;
