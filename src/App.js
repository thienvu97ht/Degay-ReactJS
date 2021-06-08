import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";
import Trending from "./components/Trending/Trending";
import News from "./components/News/News";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          {/* Nav bar */}
          <Menu />
          {/* Slider */}
          <Slider />
          {/* End Slide */}
        </div>
        <div>
          {/* Sản phẩm bán chạy */}
          <Trending />
          {/* Tin tức */}
          <News />
        </div>
        <div className="footer">
          <div className="footer-top">
            <h1 className="title-email">ĐĂNG KÝ NHẬN TIN</h1>
            <p className="email-text">
              Nhập địa chỉ email của bạn để nhận được tin tức mới nhất
            </p>
            <div className="input-email-container">
              <input
                type="text"
                className="email-input"
                placeholder="Nhập email của bạn..."
              />
              <button className="btn-subscribe">Đăng kí</button>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="grid wide brand-info-container">
              <div className="row">
                <div className="col l-3 m-12 c-12 text-center">
                  <div className="brand-info ">
                    <img
                      src="https://file.hstatic.net/1000281824/file/1_82476e8c8d9c485ab81af7c66dc88a32.png"
                      className="brand-info-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col l-3 m-12 c-12 mt-tablet-10 ">
                  <div className="brand-info">
                    <i className="brand-info-icon ti-home" />
                    <p className="brand-info-text">
                      Địa chỉ: <br />
                      Q.Phú Nhuận: 43 Huỳnh Văn Bánh <br />
                      Q.Tân Phú: 905 Lũy Bán Bích <br />
                      Q.3: 224 Lý Chính Thắng <br />
                      Q.1: 26 Lý Tự Trọng (TNP) <br />
                      Q.1: 90 Lê Lai (TNP) <br />
                    </p>
                  </div>
                </div>
                <div className="col l-3 m-12 c-12 mt-tablet-10">
                  <div className="brand-info">
                    <i className="brand-info-icon ti-email" />
                    <p className="brand-info-text">
                      Email: degrey.vn@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col l-3 m-12 c-12 mt-tablet-10">
                  <div className="brand-info">
                    <i className="brand-info-icon ti-mobile" />
                    <p className="brand-info-text">Tel: 0336311117</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="brand-policy">
              <div className="social-network-icon text-center">
                <i className="social-icon ti-facebook" />
                <i className="social-icon ti-instagram" />
                <i className="social-icon fab fa-youtube" />
                <i className="social-icon fab fa-tiktok" />
              </div>
              <div className="footer-menu">
                <div className="grid wide">
                  <div className="row">
                    <div className="col l-6 m-6 c-12 footer-menu-left">
                      <a href className="footer-menu-link">
                        TÌM KIẾM
                      </a>
                      <a href className="footer-menu-link">
                        GIỚI THIỆU
                      </a>
                      <a href className="footer-menu-link">
                        CHÍNH SÁCH ĐỔI TRẢ
                      </a>
                    </div>
                    <div className="col l-6 m-6 c-12 footer-menu-right">
                      <a href className="footer-menu-link">
                        CHÍNH SÁCH BẢO MẬT
                      </a>
                      <a href className="footer-menu-link">
                        ĐIỀU KHOẢN DỊCH VỤ
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="designer">DuongVu.Studio©2021</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
