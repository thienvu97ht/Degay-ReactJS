import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class Menu extends Component {
  render() {
    return (
      <div id="header__navbar-scroll" className="header__navbar">
        <div className="header__navbar-left ">
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__icon-menu">
              <button
                className="header__navbar-item-link"
                onclick="showModalMenu()">
                <i className="header__navbar-icon ti-menu" />
              </button>
            </li>
            <li className="header__navbar-item hide-on-mobile-tablet">
              <a
                href="index.html"
                className="header__navbar-item-link header__navbar-item-link-underline">
                Trang chủ
              </a>
            </li>
            <li className="header__navbar-item hide-on-mobile-tablet">
              <a
                href="listproducts.html"
                className="header__navbar-item-link header__navbar-item-link-underline">
                Sản phẩm
              </a>
              <div className="products-nav">
                <ul className="products-nav-list">
                  <li className="products-nav-item">
                    <a href className="products-nav-item-link ">
                      TEE
                    </a>
                  </li>
                  <li className="products-nav-item">
                    <a href className="products-nav-item-link">
                      SWEATER
                    </a>
                  </li>
                  <li className="products-nav-item">
                    <a href className="products-nav-item-link">
                      HOODIE
                    </a>
                  </li>
                  <li className="products-nav-item">
                    <a href className="products-nav-item-link">
                      JEACKET
                    </a>
                  </li>
                  <li className="products-nav-item">
                    <a href className="products-nav-item-link">
                      PANTS
                    </a>
                  </li>
                  <li className="products-nav-item">
                    <a href className="products-nav-item-link">
                      ACCESSORIES
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item hide-on-mobile-tablet">
              <a
                href="cuahang.html"
                className="header__navbar-item-link header__navbar-item-link-underline">
                Cửa hàng
              </a>
            </li>
            <li className="header__navbar-item hide-on-mobile-tablet">
              <a
                href="gioithieu.html"
                className="header__navbar-item-link header__navbar-item-link-underline">
                Giới thiệu
              </a>
            </li>
          </ul>
        </div>
        <div className="header__navbar-center">
          <a href="index.html">
            <img
              src="//theme.hstatic.net/1000281824/1000704890/14/logo.png?v=383"
              className="header__navbar-brand-logo"
              alt=""
            />
          </a>
        </div>
        <div className="header__navbar-right">
          <ul className="header__navbar-list">
            <li className="header__navbar-item hide-on-mobile-tablet">
              <a
                href="login.html"
                className="header__navbar-item-link header__navbar-item-link-underline">
                Đăng nhập
              </a>
            </li>
            <li className="header__navbar-item hide-on-mobile-tablet">
              <button
                onclick="showModalSearch()"
                className="header__navbar-item-link">
                <i className="header__navbar-icon ti-search" />
              </button>
            </li>
            <li className="header__navbar-item">
              <button
                onclick="showModalCart()"
                className="header__navbar-item-link">
                <i className="header__navbar-icon ti-bag" />
              </button>
              <span className="header__navbar-item-notice">2</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
