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
      console.log(props);
      return {
        isOpenCartModal: props.isDisplayModal.isOpenCartModal,
      };
    }
    return null;
  }

  render() {
    var { isOpenCartModal } = this.state;
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
              <CartItem />
            </ul>
            <div className="nav__bag-cart-panel">
              <div className="nav__bag-cart-panel-total">
                <p className="nav__bag-total-text">Tổng tiền:</p>
                <p className="nav__bag-total-price">$137.00</p>
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
}

export default CartModal;
