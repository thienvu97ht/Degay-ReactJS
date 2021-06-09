import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class Account extends Component {
  render() {
    return (
      <div className="account-container">
        <div className="grid wide">
          <div className="row">
            <div className="col l-2 m-12 c-10 c-o-1">
              <div className="nav-bar-top">
                <p className="account-name">Dương Đình Thiện Vũ</p>
              </div>
              <div className="nav-bar-bottom">
                <ul className="account-information-list">
                  <li className="account-information-item active">
                    <a href className="account-information-link">
                      Thông tin chung
                    </a>
                  </li>
                  <li className="account-information-item">
                    <a href className="account-information-link">
                      Sổ địa chỉ
                    </a>
                  </li>
                  <li className="account-information-item">
                    <a href className="account-information-link">
                      Đơn hàng của tôi
                    </a>
                  </li>
                  <li className="account-information-item">
                    <a href className="account-information-link">
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-10 m-12 c-10 c-o-1">
              <div className="detailAccount">
                <div className="accountInfo">
                  <h3>BẢNG THÔNG TIN CỦA TÔI</h3>
                  <div className="user_info-container">
                    <p>Thông tin tài khoản</p>
                    <div className="user_info-box">
                      <ul>
                        <li>
                          <span>Họ và tên:</span>
                          <span>Dương Đình Thiện Vũ</span>
                        </li>
                        <li>
                          <span>Email:</span>
                          <span>thien.vu97ht123@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accountNeworder">
                  <div className="accountNeworder-title">
                    <p>Các đơn hàng vừa đặt</p>
                    <a href>Xem tất cả</a>
                  </div>
                  <div className="accountNeworder-table">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Mã đơn hàng</th>
                          <th>Ngày đặt</th>
                          <th>Sản phẩm</th>
                          <th>Tổng tiền</th>
                          <th>Trạng thái đơn hàng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#310970</td>
                          <td>19/04/2021</td>
                          <td>
                            1.{" "}
                            <a href title>
                              HEYYOU ESSENTIAL WHITE TEE - L
                            </a>{" "}
                            <br />
                            2.{" "}
                            <a href title>
                              HEYYOU BASIC NHỊP TIM BABY BLUE TEE - L
                            </a>
                            <br />
                          </td>
                          <td>296,000₫</td>
                          <td>Xử lý thành công</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="accountAddress">
                  <div className="accountAddress-title">
                    <p>Sổ địa chỉ</p>
                    <a href>Xem tất cả</a>
                  </div>
                  <div className="row">
                    <div className="col l-6 m-12 c-12">
                      <div className="accountAddress-box">
                        <p className="name">Dương Đình Thiện Vũ</p>
                        <p className="address">
                          Địa chỉ: Lô C - Chung cư Hiệp Bình Chánh - Đường 23 -
                          Phường Hiệp Bình Chánh - Quận Thủ Đức - TP Hồ Chí Minh
                          , Vietnam
                        </p>
                        <p className="phone">Điện thoại: 84981877669</p>
                        <p className="address-actions">
                          <span className="action-btn action-edit">
                            <a href>Sửa</a>
                          </span>
                          <span className="action-btn action-delete">
                            <a href>Xóa</a>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col l-6 m-12 c-12">
                      <div className="accountAddress-box">
                        <p className="name">Dương Đình Thiện Vũ</p>
                        <p className="address">
                          Địa chỉ: Lô C - Chung cư Hiệp Bình Chánh - Đường 23 -
                          Phường Hiệp Bình Chánh - Quận Thủ Đức - TP Hồ Chí Minh
                          , Vietnam
                        </p>
                        <p className="phone">Điện thoại: 84981877669</p>
                        <p className="address-actions">
                          <span className="action-btn action-edit">
                            <a href>Sửa</a>
                          </span>
                          <span className="action-btn action-delete">
                            <a href>Xóa</a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
