import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import { Link, Route } from "react-router-dom";
import CartModalContainer from "../../containers/CartModalContainer";
import NavBarMobileModalContainer from "../../containers/NavBarMobileModalContainer";
import SearchModalContainer from "../../containers/SearchModalContainer";
import LoginButton from "../Authentication/LoginButton";

const MenuLink = ({ label, to, activeOnlyWhenActive }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenActive}
      children={({ match }) => {
        var active = match ? "active-text" : "";
        return (
          <li className={`header__navbar-item hide-on-mobile-tablet ${active}`}>
            <Link
              to={to}
              className="header__navbar-item-link header__navbar-item-link-underline">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  isOpenCart = () => {
    this.props.onOpenCartModal();
  };

  isOpenMenu = () => {
    this.props.onOpenMenuModal();
  };

  isOpenSearch = () => {
    this.props.onOpenSerchModal();
  };

  showQuantity = (productsInCart) => {
    var result = 0;
    if (productsInCart.length > 0) {
      for (var i = 0; i < productsInCart.length; i++) {
        result += productsInCart[i].quantity;
      }
    }
    return result;
  };

  render() {
    var { productsInCart } = this.props;
    return (
      <Fragment>
        <div id="header__navbar-scroll" className="header__navbar">
          <div className="header__navbar-left ">
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__icon-menu">
                <button
                  className="header__navbar-item-link"
                  onClick={this.isOpenMenu}>
                  <i className="header__navbar-icon ti-menu" />
                </button>
              </li>
              <MenuLink label="Trang chủ" to="/" activeOnlyWhenActive={true} />
              <div className="header__navbar-item hide-on-mobile-tablet">
                <MenuLink
                  label="Sản phẩm"
                  to="/list-products"
                  activeOnlyWhenActive={false}
                />
                <div className="products-nav">
                  <ul className="products-nav-list">
                    <li className="products-nav-item">
                      <Link to="/tee" className="products-nav-item-link ">
                        TEE
                      </Link>
                    </li>
                    <li className="products-nav-item">
                      <Link to="/sweater" className="products-nav-item-link">
                        SWEATER
                      </Link>
                    </li>
                    <li className="products-nav-item">
                      <Link to="/hoodie" className="products-nav-item-link">
                        HOODIE
                      </Link>
                    </li>
                    <li className="products-nav-item">
                      <Link to="/jeacket" className="products-nav-item-link">
                        JEACKET
                      </Link>
                    </li>
                    <li className="products-nav-item">
                      <Link to="/pants" className="products-nav-item-link">
                        PANTS
                      </Link>
                    </li>
                    <li className="products-nav-item">
                      <Link
                        to="/accessories"
                        className="products-nav-item-link">
                        ACCESSORIES
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <MenuLink
                label="Cửa hàng"
                to="/stores"
                activeOnlyWhenActive={false}
              />
              <MenuLink
                label="Giới thiệu"
                to="/about"
                activeOnlyWhenActive={false}
              />
            </ul>
          </div>
          <div className="header__navbar-center">
            <Link to="/">
              <img
                src="//theme.hstatic.net/1000281824/1000704890/14/logo.png?v=383"
                className="header__navbar-brand-logo"
                alt=""
              />
            </Link>
          </div>
          <div className="header__navbar-right">
            <ul className="header__navbar-list">
              <LoginButton />
              <li className="header__navbar-item hide-on-mobile-tablet">
                <button
                  onClick={this.isOpenSearch}
                  className="header__navbar-item-link">
                  <i className="header__navbar-icon ti-search" />
                </button>
              </li>
              <li className="header__navbar-item">
                <button
                  onClick={this.isOpenCart}
                  className="header__navbar-item-link">
                  <i className="header__navbar-icon ti-bag" />
                </button>
                <span className="header__navbar-item-notice">
                  {this.showQuantity(productsInCart)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Cart */}
        <CartModalContainer />

        {/* Modal Menu */}
        <NavBarMobileModalContainer />

        {/* Moadl Search */}
        <SearchModalContainer />
      </Fragment>
    );
  }
}

export default Menu;
