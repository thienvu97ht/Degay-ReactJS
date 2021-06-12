import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "https://product.hstatic.net/1000281824/product/e8ab76c2-b57c-4861-836b-685b9d73dcf5_7fb1655340114ca7bf2a480718c7199d_grande.jpeg",
  },
  {
    src: "https://product.hstatic.net/1000281824/product/e2e226f4-4b09-40d9-8800-bb3e10cbf531_1173270acf634e2989cbbc9818313cb1_grande.jpeg",
  },
  {
    src: "https://product.hstatic.net/1000281824/product/9f2fee31-4ed7-45ac-b8d3-47fb3389959c_99e325a42b3b4921a05f81929bca02ef_grande.jpeg",
  },
  {
    src: "https://product.hstatic.net/1000281824/product/aa537864-cfa3-42ad-9a9f-5be1b23f4827_128761ceea22403788c0dac679bdbcf4_grande.jpeg",
  },
];

class ProductDetailModal extends Component {
  onCloseProductDetal = (params) => {
    this.props.isCloseProductDetail(params);
  };

  render() {
    const settings_2 = {
      customPaging: function (i) {
        return (
          <a href="!#">
            <img alt="" className="thumb-img" src={images[i].src} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    var { isOpenProductDetail } = this.props;
    return (
      <div
        className={isOpenProductDetail === true ? "modal-product-detail" : ""}>
        <div
          className={
            isOpenProductDetail === true ? "modal__overlay-product-detail" : ""
          }
          onClick={() => this.onCloseProductDetal(false)}
        />

        {/* Modal menu */}
        <div
          className={
            isOpenProductDetail
              ? "modal__body-detail-product active-product-detail-modal"
              : "modal__body-detail-product"
          }>
          <div className="gird">
            <div className="row">
              <div className="col l-6 detail-product-left-modal">
                <Slider {...settings_2}>
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="detail-product-img sv-slider-item-modal">
                      <img alt="" src={img.src} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="col l-6 detail-product-right-modal">
                <h1 className="modal-title-product">
                  Sơ Mi Siết Tay Anh Xanh - STA Xanh
                </h1>
                <p className="category-product">Áo</p>
                <div className="modal-size-box">
                  <p className="size-title">Kích thước</p>
                  <div data-value="NHỎ" className="size-input-box">
                    <input
                      id="swatch-0-nh"
                      type="radio"
                      name="option-0"
                      defaultValue="NHỎ"
                      defaultChecked
                    />
                    <label htmlFor="swatch-0-nh">NHỎ</label>
                  </div>
                  <div data-value="TRUNG" className="size-input-box">
                    <input
                      id="swatch-0-trung"
                      type="radio"
                      name="option-0"
                      defaultValue="TRUNG"
                    />
                    <label htmlFor="swatch-0-trung">TRUNG</label>
                  </div>
                  <div data-value="LỚN" className="size-input-box">
                    <input
                      id="swatch-0-lon"
                      type="radio"
                      name="option-0"
                      defaultValue="LỚN"
                    />
                    <label htmlFor="swatch-0-lon">LỚN</label>
                  </div>
                </div>
                <div className="quantity-product-box">
                  <p className="size-title">Số lượng</p>
                  <input
                    type="text"
                    defaultValue={1}
                    className="quantity-input"
                  />
                </div>
                <p className="modal-product-price">330,000 VND</p>
                <button className="modal-add-product-btn">THÊM VÀO GIỎ</button>
              </div>
            </div>
          </div>
          <div className="modal__body-close">
            <button
              onClick={() => this.onCloseProductDetal(false)}
              className="modal__body-close-btn">
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailModal;
