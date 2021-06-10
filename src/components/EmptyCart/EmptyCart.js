import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";

class EmptyCart extends Component {
  render() {
    return (
      <div className="empry_cart-container">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-10 c-o-1">
              <p className="title">Giỏ hàng</p>
              <img
                src="https://theme.hstatic.net/200000031420/1000719377/14/empty_cart.png?v=11"
                className="empty_cart-img"
                alt=""
              />
              <p className="description">
                Không có sản phẩm nào trong giỏ hàng của bạn
              </p>
              <div className="continue_shopping-btn">
                <Link to="/list-products" className="continue_shopping-link">
                  TIẾP TỤC MUA HÀNG
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
