import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class SearchModal extends Component {
  state = {
    isOpenSearchModal: this.props.isDisplayModal.isOpenSearchModal,
  };

  onCloseSearch = () => {
    this.props.onCloseSearchModal();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isDisplayModal.isOpenSearchModal !== state.isOpenSearchModal) {
      return {
        isOpenSearchModal: props.isDisplayModal.isOpenSearchModal,
      };
    }
    return null;
  }

  render() {
    var { isOpenSearchModal } = this.state;
    return (
      <div
        className={isOpenSearchModal === true ? "modal-search-container" : ""}>
        <div
          className={isOpenSearchModal === true ? "modal__overlay-search" : ""}
          onClick={this.onCloseSearch}
        />
        <div
          className={
            isOpenSearchModal === true
              ? "modal-search active-search"
              : "modal-search"
          }>
          <div className="header__menu-sreach-nav">
            <div className="header__menu-sreach-bar-all">
              <div className="header__menu-sreach-bar">
                <input
                  type="text"
                  className="header__menu-sreach-input"
                  placeholder="Tìm kiếm sản phẩm..."
                />
              </div>
              <button className="btn-search">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchModal;
