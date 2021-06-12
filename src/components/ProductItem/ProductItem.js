import { Component } from "react";

class ProductItem extends Component {
  render() {
    var { product } = this.props;
    var price = product.price
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
      <div className="col l-3 m-6 c-10 c-o-1">
        <div className="product-items">
          <a href="productDetail.html" className="product-item-img">
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
          <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
        </div>
        <div className="product-name-box text-center">
          <a href="productDetail.html" className="product-name">
            {product.name}
          </a>
        </div>
        <div className="product-price text-center">
          <p className="product-price-number">{price}</p>
          <p className="currency-unit">đ</p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
