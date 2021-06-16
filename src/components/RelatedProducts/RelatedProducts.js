import { Component } from "react";
import { Link } from "react-router-dom";

class RelatedProducts extends Component {

  isOpenProductDetail = () => {
    var { product } = this.props;
    this.props.onOpenProductModal();
    this.props.onQuickViewProductModal(product)
  }

  render() {
    var { product } = this.props;
    var price = product.price
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
      <div className="col l-3 m-6 c-10 c-o-1">
        <div className="product-items">
          <Link
            to={`product-detail/${product.id}`}
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
          </Link>
          <button onClick={this.isOpenProductDetail} className="product_item-quick-view-btn">
            <i
              className="icon-eye ti-eye hide-on-mobile-tablet"
              title="Xem nhanh"
            />
          </button>
          <a href={`${product.id}`}>
            <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
          </a>
        </div>
        <div className="product-name-box text-center">
          <a href={`${product.id}`} className="product-name">
            {product.name}
          </a>
        </div>
        <div className="product-price text-center">
          <p className="product-price-number">{price} VNĐ</p>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
