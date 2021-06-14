import React, { Component } from "react";

class CartItem extends Component {
  findProductById = (productsInCart, products) => {
    var result = null;


    return result;
  };

  render() {
    var { productById, productInCart } = this.props;
    var price = productById.price
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    console.log(productById);
    return (
      <li className="nav__bag-list-item">
        <div className="nav__bag-list-item-left">
          <img
            src={productById.images[1].src}
            alt=""
            className="product-in-cart-img"
          />
        </div>
        <div className="nav__bag-list-item-right">
          <div className="nav__bag--item-name">
            <a href="!#" className="nav__bag--item-name-link">
              {productById.name}
            </a>
            <i className="ti-close nav__bag--item-name-close" />
          </div>
          <div className="nav__bag-list-item-category">
            <p>{productInCart.size}</p>
          </div>
          <div className="nav__bag--item-pricing">
            <div className="nav__bag--item-quantity">
              <a href="!#" className="minus">
                <i className=" ti-minus" />
              </a>
              <input
                type="number"
                className="nav__bag--item-quantity-number"
                maxLength={1}
                defaultValue={productInCart.quantity}
                placeholder={0}
              />
              <a href="!#" className="plus">
                <i className=" ti-plus" />
              </a>
            </div>
            <p className="nav__bag--item-price">{price} đ</p>
          </div>
        </div>
      </li>
    );
  }
}

export default CartItem;
