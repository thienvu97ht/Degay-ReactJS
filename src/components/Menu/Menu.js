import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import Modal from "../ModalNavBar/ModalNavbar";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class Menu extends Component {

  isOpenCart = () => {
    this.props.isOpenCart();
  };

  render() {
    return (
      <Fragment>
        <div id="header__navbar-scroll" className="header__navbar">
          <div className="header__navbar-left ">
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__icon-menu">
                <button
                  className="header__navbar-item-link"
                  onClick={this.isOpenNavMobie}>
                  <i className="header__navbar-icon ti-menu" />
                </button>
              </li>
              <li className="header__navbar-item hide-on-mobile-tablet">
                <Link
                  to="/"
                  className="header__navbar-item-link header__navbar-item-link-underline">
                  Trang chủ
                </Link>
              </li>
              <li className="header__navbar-item hide-on-mobile-tablet">
                <Link
                  to="/listProducts"
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
              <li className="header__navbar-item hide-on-mobile-tablet">
                <Link
                  to="/stores"
                  className="header__navbar-item-link header__navbar-item-link-underline">
                  Cửa hàng
                </Link>
              </li>
              <li className="header__navbar-item hide-on-mobile-tablet">
                <Link
                  to="/about"
                  className="header__navbar-item-link header__navbar-item-link-underline">
                  Giới thiệu
                </Link>
              </li>
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
              <li className="header__navbar-item hide-on-mobile-tablet">
                <Link
                  to="/login"
                  className="header__navbar-item-link header__navbar-item-link-underline">
                  Đăng nhập
                </Link>
              </li>
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

        {/* Modal */}
        <Modal />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    isOpenCart: () => {
      dispatch(actions.openCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
