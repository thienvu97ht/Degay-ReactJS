import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

class CartModal extends Component {
  state = {
    isOpenCartModal: this.props.isDisplayModal.isOpenCartModal,
  };

  componentDidMount() {
    this.props.fetchAllProductsInCart();
  }

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

  findProductById = (productsInCart, products) => {
    var result = [];
    if (productsInCart.length > 0) {
      for (var i = 0; i < products.length; i++) {
        for (var j = 0; j < productsInCart.length; j++) {
          if (products[i].id === productsInCart[j].productId) {
            result.push(products[i]);
          }
        }
      }
    }
    return result;
  };

  showProductsInCart = (productsById, productsInCart) => {
    var result = null;
    if (productsById.length > 0) {
      result = productsInCart.map((productInCart, index) => {
        var productById = productsById.find((productById) => {
          return productById.id === productInCart.productId;
        });

        return (
          <CartItem
            key={index}
            productById={productById}
            productInCart={productInCart}
          />
        );
      });
    }
    return result;
  };

  showTotalAmount = (productsById, productsInCart) => {
    var total = 0;
    if (productsById.length > 0) {
      for (var i = 0; i < productsById.length; i++) {
        for (var j = 0; j < productsInCart.length; j++) {
          if (productsById[i].id === productsInCart[j].productId) {
            total += productsById[i].price * productsInCart[j].quantity;
          }
        }
      }
    }
    var totalFormat = total
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return totalFormat;
  };

  render() {
    var { isOpenCartModal } = this.state;
    var { productsInCart, products } = this.props;

    var productsById = this.findProductById(productsInCart, products);
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
              {this.showProductsInCart(productsById, productsInCart)}
            </ul>
            <div className="nav__bag-cart-panel">
              <div className="nav__bag-cart-panel-total">
                <p className="nav__bag-total-text">Tổng tiền:</p>
                <p className="nav__bag-total-price">
                  {this.showTotalAmount(productsById, productsInCart)} đ
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
}

export default CartModal;
