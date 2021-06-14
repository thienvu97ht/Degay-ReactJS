import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound_container">
        <img
          src="https://theme.hstatic.net/200000031420/1000719377/14/404.png?v=22"
          alt=""
          className="notfound-img"
        />
        <p className="notfound-text">
          Chúng tôi không thể tìm thấy trang bạn yêu cầu.
        </p>
        <Link to="/" className="notfound-link">
          Về trang chủ
          <i className="notfound-icon ti-arrow-right"></i>
        </Link>
      </div>
    );
  }
}

export default NotFound;
