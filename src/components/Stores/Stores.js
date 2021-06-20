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
                  <p className="srote-item-name">DEGREY SÀI GÒN CS1</p>
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
                  <p className="srote-item-name">DEGREY SÀI GÒN CS2</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    905 Lúy Bán Bích, Q.Tân Phú, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY SÀI GÒN CS3</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    26 Lý Tự Trọng, Quận 1, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY SÀI GÒN CS4</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    96 Lê Lai, Quận 1, TP.Hồ Chí Minh
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY HÀ NỘI</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    117 Đông Các, Q.Đống Đa, TP.Hà Nội
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>

                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY ĐÀ NẴNG</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    126 Lê Duẩn, Q.Hải Châu, TP.Đà Nẵng
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>

                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY BIÊN HÒA</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    235 Phan Trung, TP.Biên Hòa
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>

                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY CẦN THƠ</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    15 Nguyễn Việt Hồng, Q.Ninh Kiều, TP.Cần Thơ
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>

                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY MỸ THO</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    73 Lý Thường Kiệt, TP.Mỹ Tho
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>

                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY ĐÀ LẠT</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    11 Khu Hòa Bình, Phường 1, TP.Đà Lạt
                  </p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-cskh">CSKH (8H-22H) 033 6311 117</p>
                </div>

                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-name">DEGREY NHA TRANG</p>
                </div>
                <div className="col l-4 m-4 c-10 c-o-1 list-srote-item">
                  <p className="srote-item-address">
                    8 Ngô Gia Tự, P.Phước Tiến, TP.Nha Trang
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
