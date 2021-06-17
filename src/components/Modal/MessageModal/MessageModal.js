import React, { Component, Fragment } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class MessageModal extends Component {
  state = {
    isOpenMessageModal: this.props.isDisplayModal.isOpenMessageModal,
    isRequiredSize: this.props.isDisplayModal.isRequiredSize,
  };

  onCloseAll = () => {
    this.props.onCloseProductModal();
    this.props.onCloseMessageModal();
  };

  onCloseMessage = () => {
    this.props.onCloseMessageModal();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isDisplayModal.isOpenMessageModal !== state.isOpenMessageModal) {
      return {
        isOpenMessageModal: props.isDisplayModal.isOpenMessageModal,
        isRequiredSize: props.isDisplayModal.isRequiredSize,
      };
    }
    return null;
  }

  /* Required Size Or Success*/
  showMessageContent = (isRequiredSize) => {
    if (isRequiredSize) {
      return <p className="modal-message-size-text">Vui lòng chọn size</p>;
    } else {
      return (
        <Fragment>
          <p className="modal-message-box-text">Thêm vào giỏ hàng thành công</p>
          <Link to="/view-cart" onClick={this.onCloseAll} className="view-cart">
            XEM GIỎ HÀNG
          </Link>
        </Fragment>
      );
    }
  };

  render() {
    var { isOpenMessageModal, isRequiredSize } = this.state;

    return (
      <div
        className={
          isOpenMessageModal === true ? "modal-add_product-success" : ""
        }>
        <div
          className={
            isOpenMessageModal === true
              ? "modal__overlay-add_product-success"
              : ""
          }
          onClick={this.onCloseMessage}
        />
        <div
          className={
            isOpenMessageModal === true
              ? "modal-message-box active-message"
              : "modal-message-box"
          }>
          <div className="custom-wide-message-box">
            <p className="modal-message-box-title">THÔNG BÁO</p>
            <div className="modal-message-box-container">
              {this.showMessageContent(isRequiredSize)}
            </div>
          </div>

          <div className="modal-message-close">
            <button
              onClick={this.onCloseMessage}
              className="modal-message-close-btn">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageModal;
