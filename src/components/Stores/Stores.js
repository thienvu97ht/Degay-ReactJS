import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class Stores extends Component {
  render() {
    return (
      <div className="stores-container">
        <div className="grid">
          <div className="title-bacground"></div>
          <div className="store-title">
            <h1 className="store-title-text">HỆ THỐNG CỬA HÀNG DEGREY</h1>
            <h2 className="work-time-title">GIỜ HOẠT ĐỘNG</h2>
            <h3 className="work-time-title">8:00 - 22:00</h3>
            <p className="note-title">
              Ghi chú: DEGREY mở cửa từ 8h đến 22h (Tất cả các ngày trong tuần)
            </p>
            <div className="grid wide-list-store">
              <div className="row">
                {/* Title */}
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item"></div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <h4 className="list-srote-item-title hide-on-mobile-tablet">
                    ĐỊA CHỈ
                  </h4>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <h4 className="list-srote-item-title hide-on-mobile-tablet">
                    LIÊN LẠC
                  </h4>
                </div>
                {/* List Item */}
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">STORE HUỲNH VĂN BÁNH</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    43 Huỳnh Văn Bánh, Q.Phú Nhuận, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">STORE HUỲNH VĂN BÁNH</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    43 Huỳnh Văn Bánh, Q.Phú Nhuận, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">STORE HUỲNH VĂN BÁNH</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    43 Huỳnh Văn Bánh, Q.Phú Nhuận, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">STORE HUỲNH VĂN BÁNH</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    43 Huỳnh Văn Bánh, Q.Phú Nhuận, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">STORE HUỲNH VĂN BÁNH</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    43 Huỳnh Văn Bánh, Q.Phú Nhuận, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stores;
