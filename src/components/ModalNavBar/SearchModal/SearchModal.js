import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class SearchModal extends Component {
  onCloseSearch = (params) => {
    this.props.isCloseSearch(params);
  };

  render() {
    var { isOpenSearch } = this.props;
    return (
      <div className={isOpenSearch === true ? "modal-search-container" : ""}>
        <div
          className={isOpenSearch === true ? "modal__overlay-search" : ""}
          onClick={() => this.onCloseSearch(false)}
        />
        <div
          className={
            isOpenSearch === true
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
