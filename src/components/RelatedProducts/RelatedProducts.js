import { Component } from "react";
import { Link } from "react-router-dom";

class RelatedProducts extends Component {
  render() {
    var { product } = this.props;
    var price = product.price
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
      <div className="col l-3 m-6 c-10 c-o-1">
        <div className="product-items">
          <a
            href={`${product.id}`}
            className="product-item-img">
            <img
              src={product.images[0].src}
              alt=""
              className="product-item-img1"
            />
            <img
              src={product.images[1].src}
              alt=""
              className="product-item-img2"
            />
          </a>
          <i
            className="icon-eye ti-eye hide-on-mobile-tablet"
            title="Xem nhanh"
          />
          <Link to={`product-detail/${product.id}`}>
            <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
          </Link>
        </div>
        <div className="product-name-box text-center">
          <Link to={`product-detail/${product.id}`}
            className="product-name">
            {product.name}
          </Link>
        </div>
        <div className="product-price text-center">
          <p className="product-price-number">{price} VNĐ</p>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
