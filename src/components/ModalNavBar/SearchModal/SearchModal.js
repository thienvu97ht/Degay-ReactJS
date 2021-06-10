import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class SearchModal extends Component {
  render() {
    return (
      <div className="modal-search">
        <div className="header__menu-sreach-nav">
          <div className="header__menu-sreach-bar-all">
            <div className="header__menu-sreach-bar">
              <input
                type="text"
                className="header__menu-sreach-input"
                placeholder="Tìm kiếm sản phẩm..."
              />
            </div>
            <button onclick="searchProduct()" className="btn-search">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchModal;
