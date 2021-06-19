import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";

class SearchModal extends Component {
  state = {
    isOpenSearchModal: this.props.isDisplayModal.isOpenSearchModal,
    keyword: "",
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isDisplayModal.isOpenSearchModal !== state.isOpenSearchModal) {
      return {
        isOpenSearchModal: props.isDisplayModal.isOpenSearchModal,
      };
    }
    return null;
  }

  onCloseSearch = () => {
    this.props.onCloseSearchModal();
  };

  sendKeyword = () => {
    var { keyword } = this.state;
    this.onCloseSearch();
    this.props.onSendKeyword(keyword);
    this.setState({
      keyword: "",
    });
  };

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
  };

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
            <form
              onSubmit={this.onSave}
              name="search-form"
              className="header__menu-sreach-bar-all">
              <div className="header__menu-sreach-bar">
                <input
                  onChange={this.onChange}
                  autoComplete="off"
                  type="text"
                  name="keyword"
                  className="header__menu-sreach-input"
                  placeholder="Tìm kiếm sản phẩm..."
                />
              </div>
              <Link
                to="/search"
                onClick={this.sendKeyword}
                type="submit"
                className="btn-search">
                Tìm kiếm
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchModal;
