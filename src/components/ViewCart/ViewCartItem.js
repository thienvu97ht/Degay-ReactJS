import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
// import { Link } from "react-router-dom";

class ViewCartItem extends Component {
  qtyMinus = () => {
    var { productInCart } = this.props;
    if (productInCart.quantity <= 1) {
      console.log("Sản phẩm phải nhiều hơn 1");
    } else {
      productInCart.quantity = productInCart.quantity - 1;
      this.props.onUpdateProductInCart(productInCart);
    }
  };

  qtyPlus = () => {
    var { productInCart } = this.props;
    productInCart.quantity = productInCart.quantity + 1;
    this.props.onUpdateProductInCart(productInCart);
  };

  deleteProductInCart = () => {
    var { productInCart } = this.props;
    this.props.onDeleteProductInCart(productInCart.id);
  };

  onChange = (e) => {};

  render() {
    var { productById, productInCart } = this.props;
    console.log(productInCart);
    var priceProduct = productById.price
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    var totalPriceProduct = (productById.price * productInCart.quantity)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
      <tr className="cart_item">
        <th className="product">
          <a href="productDetail.html">
            <div className="thumb-cart">
              <img src={productById.images[0].src} alt="" />
              <div className="thumb-cart-info">
                <p className="name">{productById.name}</p>
                <p className="size">Size: {productInCart.size}</p>
                <p className="price">{priceProduct} VNĐ</p>
              </div>
            </div>
          </a>
        </th>
        <th className="qty">
          <div className="qty-number">
            <input
              onClick={this.qtyMinus}
              type="button"
              className="qtymius"
              defaultValue="<"
            />
            <input
              type="number"
              onChange={this.onChange}
              className="quantity"
              value={productInCart.quantity}
            />
            <input
              onClick={this.qtyPlus}
              type="button"
              className="qtyplus"
              defaultValue=">"
            />
          </div>
        </th>
        <th className="price">
          <p>{totalPriceProduct} VNĐ</p>
        </th>
        <th className="remove">
          <button onClick={this.deleteProductInCart} className="btn-remove">
            <i className="fas fa-trash-alt" />
          </button>
        </th>
      </tr>
    );
  }
}

export default ViewCartItem;
