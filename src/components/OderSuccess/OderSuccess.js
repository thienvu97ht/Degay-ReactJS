import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";

class OderSuccess extends Component {
  render() {
    return (
      <div class="oder_success-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
          alt=""
          class="oder_success-img"
        />
        <p class="oder_success-text">
          Đơn hàng của bạn đã được đặt thành công, chúng tôi sẽ gửi hàng cho bạn
          sau 1000 năm nữa!
        </p>
        <Link to="/list-products" class="oder_success-link">
          Tiếp tục mua sắm
          <i class="oder_success-icon ti-arrow-right"></i>
        </Link>
      </div>
    );
  }
}

export default OderSuccess;
