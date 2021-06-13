import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <li className="nav__bag-list-item">
        <div className="nav__bag-list-item-left">
          <img
            src="https://goya.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2019/05/woman-abstract-a1-150x150.jpg"
            alt=""
            className="product-in-cart-img"
          />
        </div>
        <div className="nav__bag-list-item-right">
          <div className="nav__bag--item-name">
            <a href="!#" className="nav__bag--item-name-link">
              Abstract Print Cotton Blouse
            </a>
            <i className="ti-close nav__bag--item-name-close" />
          </div>
          <div className="nav__bag-list-item-category">
            <p>Size: Nhỏ</p>
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
                defaultValue={1}
                placeholder={0}
              />
              <a href="!#" className="plus">
                <i className=" ti-plus" />
              </a>
            </div>
            <p className="nav__bag--item-price">$39.00</p>
          </div>
        </div>
      </li>
    );
  }
}

export default CartItem;
