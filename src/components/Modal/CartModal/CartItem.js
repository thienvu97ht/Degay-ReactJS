import React, { Component } from "react";

class CartItem extends Component {
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

  onChange = (e) => {};

  render() {
    var { productById, productInCart } = this.props;
    var price = (productById.price * productInCart.quantity)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return (
      <li className="nav__bag-list-item">
        <div className="nav__bag-list-item-left">
          <img
            src={productById.images[0].src}
            alt=""
            className="product-in-cart-img"
          />
        </div>
        <div className="nav__bag-list-item-right">
          <div className="nav__bag--item-name">
            <a href="!#" className="nav__bag--item-name-link">
              {productById.name}
            </a>
            <button className="cart_item-close-btn">
              <i className="ti-close nav__bag--item-name-close" />
            </button>
          </div>
          <div className="nav__bag-list-item-category">
            <p>{productInCart.size}</p>
          </div>
          <div className="nav__bag--item-pricing">
            <div className="nav__bag--item-quantity">
              <button onClick={this.qtyMinus} className="minus">
                <i className=" ti-minus" />
              </button>
              <input
                type="number"
                onChange={this.onChange}
                className="nav__bag--item-quantity-number"
                value={productInCart.quantity}
              />
              <button onClick={this.qtyPlus} className="plus">
                <i className=" ti-plus" />
              </button>
            </div>
            <p className="nav__bag--item-price">{price} VNĐ</p>
          </div>
        </div>
      </li>
    );
  }
}

export default CartItem;
