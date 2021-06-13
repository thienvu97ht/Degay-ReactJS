import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";

class NavBarMobileModal extends Component {
  state = {
    isOpenMenuModal: this.props.isDisplayModal.isOpenMenuModal,
  };

  onCloseMenu = () => {
    this.props.onCloseMenuModal();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isDisplayModal.isOpenMenuModal !== state.isOpenMenuModal) {
      console.log(props);
      return {
        isOpenMenuModal: props.isDisplayModal.isOpenMenuModal,
      };
    }
    return null;
  }

  render() {
    var { isOpenMenuModal } = this.state;
    return (
      <div className={isOpenMenuModal === true ? "modal-menu" : ""}>
        <div
          className={isOpenMenuModal === true ? "modal__overlay-menu" : ""}
          onClick={this.onCloseMenu}
        />

        {/* Modal menu */}
        <div
          className={
            isOpenMenuModal === true
              ? "modal-menu-mobile active-menu"
              : "modal-menu-mobile"
          }>
          <div className="menu__mobile--tablet-header">
            <button
              onClick={() => this.onCloseMenu(false)}
              className="mobile--tablet__link-close">
              <i className="mobile--tablet__close-icon ti-close" />
            </button>
          </div>
          <div className="menu__mobile--tablet-body">
            <div className="menu__mobile--tablet-body-top">
              <div className="menu__mobile--tablet-sreach">
                <i className="menu__mobile--tablet-sreach-icon ti-search" />
                <input
                  type="text"
                  className="menu__mobile--tablet-sreach-input"
                  placeholder="Tìm kiếm sản phẩm..."
                />
              </div>
              <div className="menu__mobile--tablet-nav">
                <Link
                  to="/"
                  onClick={this.onCloseMenu}
                  className="menu__mobile--tablet-content">
                  Trang chủ
                </Link>
              </div>
              <div className="menu__mobile--tablet-nav">
                <Link
                  to="/list-products"
                  onClick={this.onCloseMenu}
                  className="menu__mobile--tablet-content">
                  Sản phẩm
                </Link>
                <i className="menu__mobile--tablet-main-icon ti-angle-right" />
              </div>
              <div className="menu__mobile--tablet-nav">
                <Link
                  to="/stores"
                  onClick={this.onCloseMenu}
                  className="menu__mobile--tablet-content">
                  Cửa hàng
                </Link>
              </div>
              <div className="menu__mobile--tablet-nav">
                <Link
                  to="/about"
                  onClick={this.onCloseMenu}
                  className="menu__mobile--tablet-content">
                  Giới thiệu
                </Link>
              </div>
            </div>
            <div className="menu__mobile--tablet-body-bottom">
              <div className="menu__mobile--tablet-subnav">
                <Link
                  to="/login"
                  onClick={this.onCloseMenu}
                  className="menu__mobile--tablet-subnav-content">
                  Đăng nhập
                </Link>
                <i className="menu__mobile--tablet-subnav-icon ti-lock" />
              </div>
              <div className="menu__mobile--tablet-subnav">
                <Link
                  to="/view-cart"
                  onClick={this.onCloseMenu}
                  className="menu__mobile--tablet-subnav-content">
                  Giỏ hàng
                </Link>
                <i className="menu__mobile--tablet-subnav-icon ti-bag" />
              </div>
              <div className="menu__mobile--tablet-subnav-icon-box">
                <i className="menu__mobile--tablet-subnav-icon ti-facebook" />
                <i className="menu__mobile--tablet-subnav-icon ti-instagram" />
                <i className="menu__mobile--tablet-subnav-icon fab fa-youtube" />
                <i className="menu__mobile--tablet-subnav-icon fab fa-tiktok" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarMobileModal;
