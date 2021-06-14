import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

class CartModal extends Component {
  state = {
    isOpenCartModal: this.props.isDisplayModal.isOpenCartModal,
  };

  onCloseCart = () => {
    this.props.onCloseCartModal();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isDisplayModal.isOpenCartModal !== state.isOpenCartModal) {
      return {
        isOpenCartModal: props.isDisplayModal.isOpenCartModal,
      };
    }
    return null;
  }

  showProductsInCart = (productsInCart) => {
    var result = null;
    if (productsInCart.length > 0) {
      result = productsInCart.map((productInCart, index) => {
        return <CartItem key={index} productInCart={productInCart} />;
      });
    }
    return result;
  };

  render() {
    var { isOpenCartModal } = this.state;
    var { productsInCart } = this.props;
    return (
      <div className={isOpenCartModal === true ? "modal-cart" : ""}>
        <div
          className={isOpenCartModal === true ? "modal__overlay-cart" : ""}
          onClick={this.onCloseCart}
        />
        <div
          className={
            isOpenCartModal === true
              ? "header__menu-nav-bag active-cart"
              : "header__menu-nav-bag"
          }>
          <div className="nav__bang-header">
            <span className="nav__bang-header-cart">Giỏ hàng </span>
            <label onClick={this.onCloseCart} className="nav__bag-header-link">
              <i className="nav__bang-header-icon ti-close" />
            </label>
          </div>
          <div className="shopping__cart-container">
            <ul className="nav__bag-list">
              {/* Cart Item */}
              {this.showProductsInCart(productsInCart)}
            </ul>
            <div className="nav__bag-cart-panel">
              <div className="nav__bag-cart-panel-total">
                <p className="nav__bag-total-text">Tổng tiền:</p>
                <p className="nav__bag-total-price">
                  {this.showTotalAmount(productsInCart)} đ
                </p>
              </div>
              <Link
                to="/view-cart"
                className="nav__bag-view-cart"
                onClick={this.onCloseCart}>
                Xem giỏ hàng
              </Link>
              <Link
                to="/checkout"
                className="nav__bag-check-out"
                onClick={this.onCloseCart}>
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showTotalAmount = (productsInCart) => {
    var total = 0;
    if (productsInCart.length > 0) {
      for (var i = 0; i < productsInCart.length; i++) {
        total += productsInCart[i].product.price * productsInCart[i].quantity;
      }
    }
    var totalFormat = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

    return totalFormat;
  };
}

export default CartModal;
