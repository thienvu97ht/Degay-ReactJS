import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class CartModal extends Component {
  render() {
    var { isOpenCart } = this.props;
    console.log(isOpenCart);
    return (
      <div
        className={
          isOpenCart ? "header__menu-nav-bag active" : "header__menu-nav-bag"
        }>
        <div className="nav__bang-header">
          <span className="nav__bang-header-cart">Giỏ hàng </span>
          <label onclick="closeModalCart()" className="nav__bag-header-link">
            <i className="nav__bang-header-icon ti-close" />
          </label>
        </div>
        <div className="shopping__cart-container">
          <ul className="nav__bag-list">
            <li className="nav__bag-list-item">
              <div className="nav__bag-list-item-left">
                <img
                  src="https://goya.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2019/05/woman-abstract-a1-150x150.jpg"
                  alt
                  className="product-in-cart-img"
                />
              </div>
              <div className="nav__bag-list-item-right">
                <div className="nav__bag--item-name">
                  <a href className="nav__bag--item-name-link">
                    Abstract Print Cotton Blouse
                  </a>
                  <i className="ti-close nav__bag--item-name-close" />
                </div>
                <div className="nav__bag-list-item-category">
                  <p>Size: Nhỏ</p>
                </div>
                <div className="nav__bag--item-pricing">
                  <div className="nav__bag--item-quantity">
                    <a href="#" className="minus">
                      <i className=" ti-minus" />
                    </a>
                    <input
                      type="number"
                      className="nav__bag--item-quantity-number"
                      maxLength={1}
                      defaultValue={1}
                      placeholder={0}
                    />
                    <a href="#" className="plus">
                      <i className=" ti-plus" />
                    </a>
                  </div>
                  <p className="nav__bag--item-price">$39.00</p>
                </div>
              </div>
            </li>
            <li className="nav__bag-list-item">
              <div className="nav__bag-list-item-left">
                <img
                  src="https://goya.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/01/woman-microbag-a1-150x150.jpg"
                  alt
                  className="product-in-cart-img"
                />
              </div>
              <div className="nav__bag-list-item-right">
                <div className="nav__bag--item-name">
                  <a href className="nav__bag--item-name-link">
                    Micro Form Bag
                  </a>
                  <i className="ti-close nav__bag--item-name-close" />
                </div>
                <div className="nav__bag-list-item-category">
                  <p>Size: Trung</p>
                </div>
                <div className="nav__bag--item-pricing">
                  <div className="nav__bag--item-quantity">
                    <a href="#" className="minus">
                      <i className=" ti-minus" />
                    </a>
                    <input
                      type="number"
                      className="nav__bag--item-quantity-number"
                      maxLength={2}
                      defaultValue={1}
                      placeholder={0}
                    />
                    <a href="#" className="plus">
                      <i className=" ti-plus" />
                    </a>
                  </div>
                  <p className="nav__bag--item-price">$98.00</p>
                </div>
              </div>
            </li>
            <li className="nav__bag-list-item">
              <div className="nav__bag-list-item-left">
                <img
                  src="https://goya.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/01/woman-microbag-a1-150x150.jpg"
                  alt
                  className="product-in-cart-img"
                />
              </div>
              <div className="nav__bag-list-item-right">
                <div className="nav__bag--item-name">
                  <a href className="nav__bag--item-name-link">
                    Micro Form Bag
                  </a>
                  <i className="ti-close nav__bag--item-name-close" />
                </div>
                <div className="nav__bag-list-item-category">
                  <p>Size: Trung</p>
                </div>
                <div className="nav__bag--item-pricing">
                  <div className="nav__bag--item-quantity">
                    <a href="#" className="minus">
                      <i className=" ti-minus" />
                    </a>
                    <input
                      type="number"
                      className="nav__bag--item-quantity-number"
                      maxLength={2}
                      defaultValue={1}
                      placeholder={0}
                    />
                    <a href="#" className="plus">
                      <i className=" ti-plus" />
                    </a>
                  </div>
                  <p className="nav__bag--item-price">$98.00</p>
                </div>
              </div>
            </li>
            <li className="nav__bag-list-item">
              <div className="nav__bag-list-item-left">
                <img
                  src="https://goya.everthemes.com/demo-fashion/wp-content/uploads/sites/3/2020/01/woman-microbag-a1-150x150.jpg"
                  alt
                  className="product-in-cart-img"
                />
              </div>
              <div className="nav__bag-list-item-right">
                <div className="nav__bag--item-name">
                  <a href className="nav__bag--item-name-link">
                    Micro Form Bag
                  </a>
                  <i className="ti-close nav__bag--item-name-close" />
                </div>
                <div className="nav__bag-list-item-category">
                  <p>Size: Trung</p>
                </div>
                <div className="nav__bag--item-pricing">
                  <div className="nav__bag--item-quantity">
                    <a href="#" className="minus">
                      <i className=" ti-minus" />
                    </a>
                    <input
                      type="number"
                      className="nav__bag--item-quantity-number"
                      maxLength={2}
                      defaultValue={1}
                      placeholder={0}
                    />
                    <a href="#" className="plus">
                      <i className=" ti-plus" />
                    </a>
                  </div>
                  <p className="nav__bag--item-price">$98.00</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="nav__bag-cart-panel">
            <div className="nav__bag-cart-panel-total">
              <p className="nav__bag-total-text">Tổng tiền:</p>
              <p className="nav__bag-total-price">$137.00</p>
            </div>
            <a href="viewCart.html" className="nav__bag-view-cart">
              Xem giỏ hàng
            </a>
            <a href="checkout.html" className="nav__bag-check-out">
              Thanh toán
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;
