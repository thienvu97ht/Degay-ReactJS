import { Component } from "react";
import { Link } from "react-router-dom";

class TrendingItem extends Component {
  isOpenProductDetail = () => {
    var { trendingProduct } = this.props;
    this.props.onOpenProductModal();
    this.props.onQuickViewProductModal(trendingProduct)
  };

  render() {
    var { trendingProduct } = this.props;
    var price = trendingProduct.price
      ? trendingProduct.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : "";
    return (
      <div className="col l-3 m-6 c-10 c-o-1">
        <div className="container__trending-item">
          <Link
            to={`product-detail/${trendingProduct.id}`}
            className="container__trending-img">
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
          </Link>
          <button onClick={this.isOpenProductDetail} className="quick-view-btn">
            <i
              className="icon-eye ti-eye hide-on-mobile-tablet"
              title="Xem nhanh"
            />
          </button>
          <Link
            to={`product-detail/${trendingProduct.id}`}
            className="add-cart-btn">
            <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
          </Link>
        </div>
        <div className="product-name-box text-center">
          <Link
            to={`product-detail/${trendingProduct.id}`}
            className="product-name">
            {trendingProduct.name}
          </Link>
        </div>
        <div className="product-price text-center">
          <p className="product-price-number">{price} VNĐ</p>
        </div>
      </div>
    );
  }
}

export default TrendingItem;
