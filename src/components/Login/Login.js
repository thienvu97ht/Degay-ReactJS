import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class Login extends Component {
  render() {
    return (
      <div className="log-in-sign-up-container">
        <div className="login-socia-network">
          <p className="login-socia-title">ĐĂNG NHẬP BẰNG</p>
          <div className="text-center">
            <button className="btn-socialoginfb">Facebook</button>
            <button className="btn-socialogingg">Google+</button>
          </div>
        </div>
        <div className="line-or">
          <span className="liner-or-text">Hoặc</span>
        </div>
        <div className="log-in-sign-up-form">
          <div className="grid wide">
            <div className="row">
              <div className="col l-6 m-12 c-10 c-o-1">
                <div className="login-socia-title">ĐĂNG NHẬP</div>
                <div className="content-cus-form">
                  <form id="loginForm">
                    <div className="col_full">
                      <span className="not-null">*</span>
                      <span className="icon_checkout ico-email" />
                      <input
                        type="email"
                        id="login-form-username"
                        name="customer[email]"
                        placeholder="Email của bạn"
                        defaultValue
                        className="form-control"
                      />
                    </div>
                    <div className="col_full">
                      <span className="not-null">*</span>
                      <span className="icon_checkout ico-pass" />
                      <input
                        type="password"
                        id="login-form-password"
                        name="customer[password]"
                        placeholder="Nhập mật khẩu"
                        defaultValue
                        className="form-control"
                      />
                    </div>
                    <div className="col_full nobottommargin action">
                      <button
                        onclick="redirectAccount()"
                        className="button button-3d button-black nomargin"
                        id="login-form-submit"
                        name="login-form-submit"
                        type="submit"
                        value="login">
                        Đăng nhập
                      </button>
                      <div className="text-center">
                        <a href="#" className="forgot-password">
                          Quên mật khẩu?
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col l-6 m-12 c-10 c-o-1">
                <div className="login-socia-title">ĐĂNG KÝ THÀNH VIÊN MỚI</div>
                <div className="content-cus-form">
                  <form action>
                    <div className="col_full">
                      <span className="not-null">*</span>
                      <span className="icon_checkout ico-name" />
                      <input
                        required
                        type="text"
                        defaultValue
                        autoComplete="off"
                        name="customer[last_name]"
                        placeholder="Họ"
                        id="last_name"
                        className="text"
                        size={30}
                      />
                    </div>
                    <div className="col_full">
                      <span className="not-null">*</span>
                      <span className="icon_checkout ico-name" />
                      <input
                        required
                        type="text"
                        defaultValue
                        autoComplete="off"
                        name="customer[first_name]"
                        placeholder="Tên"
                        id="first_name"
                        className="text"
                        size={30}
                      />
                    </div>
                    <div className="col_full">
                      <span className="not-null">*</span>
                      <span className="icon_checkout ico-email" />
                      <input
                        required
                        type="email"
                        defaultValue
                        autoComplete="on"
                        placeholder="Email"
                        name="customer[email]"
                        id="email"
                        className="text"
                        size={30}
                      />
                    </div>
                    <div className="col_full">
                      <span className="not-null">*</span>
                      <span className="icon_checkout ico-pass" />
                      <input
                        required
                        type="password"
                        defaultValue
                        autoComplete="false"
                        id="register-form-password"
                        placeholder="Mật khẩu"
                        name="customer[password]"
                        className="password text"
                        size={30}
                      />
                    </div>
                    <div className="col_full nobottommargin action">
                      <button
                        className="button button-3d button-black nomargin"
                        id="register-form-submit"
                        name="register-form-submit"
                        type="submit">
                        Đăng ký
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
