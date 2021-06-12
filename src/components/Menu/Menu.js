import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import { Link, Route } from "react-router-dom";
import CartModal from "../Modal/CartModal/CartModal";
import NavBarMobileModal from "../Modal/NavBarMobileModal/NavBarMobileModal";
import SearchModal from "../Modal/SearchModal/SearchModal";

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
  state = {
    isOpenCart: false,
    isOpenMenu: false,
    isOpenSearch: false,
  };

  isOpenCart = () => {
    this.setState({ isOpenCart: !this.state.isOpenCart });
  };

  isCloseCart = (params) => {
    this.setState({ isOpenCart: params });
  };

  isOpenMenu = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  isCloseMenu = (params) => {
    this.setState({ isOpenMenu: params });
  };

  isOpenSearch = () => {
    this.setState({ isOpenSearch: !this.state.isOpenSearch });
  };

  isCloseSearch = (params) => {
    this.setState({ isOpenSearch: params });
  };

  render() {
    var { isOpenCart, isOpenMenu, isOpenSearch } = this.state;
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
              <li className="header__navbar-item hide-on-mobile-tablet">
                <Link
                  to="/list-products"
                  className="header__navbar-item-link header__navbar-item-link-underline">
                  Sản phẩm
                </Link>
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
              </li>
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
              <MenuLink
                label="Đăng nhập"
                to="/login"
                activeOnlyWhenActive={false}
              />
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
                <span className="header__navbar-item-notice">2</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Cart */}
        <CartModal isOpenCart={isOpenCart} isCloseCart={this.isCloseCart} />

        {/* Modal Menu */}
        <NavBarMobileModal
          isOpenMenu={isOpenMenu}
          isCloseMenu={this.isCloseMenu}
        />

        {/* Moadl Search */}
        <SearchModal
          isOpenSearch={isOpenSearch}
          isCloseSearch={this.isCloseSearch}
        />
      </Fragment>
    );
  }
}

export default Menu;
