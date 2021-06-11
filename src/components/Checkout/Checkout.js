import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";

class Checkout extends Component {
  render() {
    return (
      <div className="checkout-container">
        <div className="grid wide">
          <a href="index.html" className="logo_text-link">
            <p className="logo-text">DEGAY VIETNAM</p>
          </a>
          <div className="row group-block">
            <div className="col l-7 m-12 c-10 c-o-1 block-a">
              <div className="checkout-container-left">
                <div className="checkout-box-header">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/view-cart">Giỏ hàng</Link>
                    </li>
                    <li className="breadcrumb-item">Thông tin giao hàng</li>
                    <li className="breadcrumb-item">Phương thức thanh toán</li>
                  </ul>
                </div>
                <div className="checkout-box">
                  <p className="checkout-title">Thông tin giao hàng</p>
                  <div className="customer_information-box">
                    <div className="customer_information">
                      <img
                        src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                        alt=""
                        className="customer_ava"
                      />
                      <div className="customer_name">
                        <p className="name">Dương Đình Thiện Vũ</p>
                        <p className="email">thien.vu97ht123@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  {/* Input */}
                  <div className="fieldset">
                    <div className="field field-show-floating-label">
                      <div className="field-input-wrapper field-input-wrapper-select">
                        <label
                          className="field-label"
                          htmlFor="stored_addresses">
                          Thêm địa chỉ mới...
                        </label>
                        <select className="field-input" id="stored_addresses">
                          <option value={0} data-properties="{}">
                            Địa chỉ đã lưu trữ
                          </option>
                          <option
                            value={1045708809}
                            data-properties='{"id":1045708809,"last_name":"Dương Đình Thiện","first_name":"Vũ","phone":"84981877669","address1":"Lô C - Chung cư Hiệp Bình Chánh - Đường số 23 - Phường Hiệp Bình Chánh","province":"Hồ Chí Minh","country_id":"241","province_id":"50","district":"Quận Thủ Đức","district_id":"482","wardid":null,"default":true}'>
                            Dương Đình Thiện Vũ, 84981877669, Lô C - Chung cư
                            Hiệp Bình Chánh - Đường số 23 - Phường Hiệp Bình
                            Chánh, Quận Thủ Đức, Hồ Chí Minh Vietnam
                          </option>
                          <option
                            value={1061664078}
                            data-properties='{"id":1061664078,"last_name":null,"first_name":"Dương Đình Thiện Vũ","phone":"84981877669","address1":"Lô C - Chung cư Hiệp Bình Chánh - Đường 23","province":"Hồ Chí Minh","country_id":"241","province_id":"50","district":"Quận Thủ Đức","district_id":"482","wardid":"26812","default":false}'>
                            Dương Đình Thiện Vũ, 84981877669, Lô C - Chung cư
                            Hiệp Bình Chánh - Đường 23, Phường Hiệp Bình Chánh,
                            Quận Thủ Đức, Hồ Chí Minh Vietnam
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="field field-required  ">
                      <div className="field-input-wrapper">
                        <label
                          className="field-label"
                          htmlFor="billing_address_full_name">
                          Họ và tên
                        </label>
                        <input
                          placeholder="Họ và tên"
                          autoCapitalize="off"
                          spellCheck="false"
                          className="field-input"
                          size={30}
                          type="text"
                          id="billing_address_full_name"
                          name="billing_address[full_name]"
                        />
                      </div>
                    </div>
                    <div className="field field-required   ">
                      <div className="field-input-wrapper">
                        <label
                          className="field-label"
                          htmlFor="billing_address_phone">
                          Số điện thoại
                        </label>
                        <input
                          placeholder="Số điện thoại"
                          autoCapitalize="off"
                          spellCheck="false"
                          className="field-input"
                          size={30}
                          maxLength={15}
                          type="tel"
                          id="billing_address_phone"
                          name="billing_address[phone]"
                        />
                      </div>
                    </div>
                    <div className="field field-required  ">
                      <div className="field-input-wrapper">
                        <label
                          className="field-label"
                          htmlFor="billing_address_address1">
                          Địa chỉ
                        </label>
                        <input
                          placeholder="Địa chỉ"
                          autoCapitalize="off"
                          spellCheck="false"
                          className="field-input"
                          size={30}
                          type="text"
                          id="billing_address_address1"
                          name="billing_address[address1]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-box-step">
                  <div className="back-to-cart">
                    <Link to="view-cart">Giở hàng</Link>
                  </div>
                  <div className="checkout-step2">
                    <a href="finishCheckout.html">Hoàn tất đơn hàng</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-5 m-12 c-10 c-o-1 block-b">
              <div className="checkout-container-right">
                <div className="checkout-product-list">
                  <div className="checkout-product">
                    <div className="checkout-product-name">
                      <div className="checkout-product-img-box">
                        <img
                          src="https://product.hstatic.net/1000281824/product/f4b7d41d-dc19-4b81-8d29-1c14334ac00b_d96a30057e1a4519a210a3444b9fa548_grande.jpeg"
                          alt=""
                          className="checkout-product-img"
                        />
                        <span className="product-qty">1</span>
                      </div>
                      <div className="checkout-product-name-box">
                        <p className="name">Áo Thun Loang Tím</p>
                        <p className="size">Size: Trung</p>
                      </div>
                    </div>
                    <div className="checkout-product-price">
                      <p>320,000₫</p>
                    </div>
                  </div>
                  <div className="checkout-product">
                    <div className="checkout-product-name">
                      <div className="checkout-product-img-box">
                        <img
                          src="https://product.hstatic.net/1000281824/product/f4b7d41d-dc19-4b81-8d29-1c14334ac00b_d96a30057e1a4519a210a3444b9fa548_grande.jpeg"
                          alt=""
                          className="checkout-product-img"
                        />
                        <span className="product-qty">1</span>
                      </div>
                      <div className="checkout-product-name-box">
                        <p className="name">Sơ Mi Xiết Tay Anh</p>
                        <p className="size">Size: Nhỏ</p>
                      </div>
                    </div>
                    <div className="checkout-product-price">
                      <p>330,000₫</p>
                    </div>
                  </div>
                </div>
                <div className="checkout-product-discount">
                  <form>
                    <div className="discout-form">
                      <input
                        type="text"
                        placeholder="Mã giảm giá"
                        className="input-discount"
                      />
                      <button type="submit" className="btn-discount">
                        Sử dụng
                      </button>
                    </div>
                  </form>
                </div>
                <div className="checkout-product-total">
                  <div className="checkout-product-total-top">
                    <div className="checkout-product-total-top-title">
                      <p className="price-title">Tạm tính</p>
                      <p className="ship-title">Phí vận chuyển</p>
                    </div>
                    <div className="checkout-product-total-top-price">
                      <p className="price">650,000₫</p>
                      <p className="ship">30,000₫</p>
                    </div>
                  </div>
                  <div className="checkout-product-total-bottom">
                    <p className="title">Tổng cộng</p>
                    <p className="total-price">680,000₫</p>
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

export default Checkout;
