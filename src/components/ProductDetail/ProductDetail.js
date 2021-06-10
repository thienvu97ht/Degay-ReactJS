import React, { Component, Fragment } from "react";
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

class ProductDetail extends Component {
  render() {
    const settings = {
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
    return (
      <Fragment>
        <>
          <div className="product-detail-container">
            <div className="grid wide">
              <div className="row">
                <div className="col l-6 m-12 c-10 c-o-1 detail-product-left">
                  <Slider {...settings}>
                    {images.map((img) => (
                      <div className="detail-product-img sv-slider-item">
                        <img alt="" src={img.src} />
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="col l-6 m-12 c-10 c-o-1 detail-product-right">
                  <div>
                    <h1 className="product-detail-title">
                      Sơ Mi Siết Tay Anh Xanh - STA Xanh
                    </h1>
                    <p className="category-product">Áo</p>
                    <div className="product-detail_size-box">
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
                    <p className="product-detail_price">330,000 VND</p>
                    <button className="product-detail_add-btn">
                      THÊM VÀO GIỎ
                    </button>
                  </div>
                  <div>
                    <div className="product_detail-description">
                      <p className="title">Mô tả</p>
                      <p className="description">
                        Áo đẹp không mua phí cả một đời!
                      </p>
                    </div>
                    <div className="free_shipping">
                      <p>HỖ TRỢ GIAO HÀNG VỚI HOÁ ĐƠN TRÊN 150.000 VNĐ</p>
                    </div>
                    <div className="share-container">
                      <p>Chia sẻ sản phẩm này:</p>
                      <i
                        className="share-icon ti-facebook"
                        title="Không share được"
                      />
                      <i
                        className="share-icon ti-google"
                        title="Không share được"
                      />
                      <i
                        className="share-icon ti-twitter-alt"
                        title="Không share được"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-or">
            <span className="liner-or-text">Sản phẩm liên quan</span>
          </div>
          <div className="grid wide">
            <div className="row">
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="product-items">
                  <div className="product-item-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/71d141bb-580d-4270-9abb-420a0c909d95_e7d101fe66ad451c8ab1b38ff40fa582_large.jpeg"
                      alt=""
                      className="product-item-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/d8b5b151-57cc-414f-bfec-d909e798aa20_5a5da2462e2142c592b4bafadd628dad_large.jpeg"
                      alt=""
                      className="product-item-img2"
                    />
                  </div>
                  <i
                    className="icon-eye ti-eye hide-on-mobile-tablet"
                    title="Xem nhanh"
                  />
                  <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                </div>
                <div className="product-name-box text-center">
                  <a href className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="product-items">
                  <div className="product-item-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/e8ab76c2-b57c-4861-836b-685b9d73dcf5_7fb1655340114ca7bf2a480718c7199d_large.jpeg"
                      alt=""
                      className="product-item-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/e2e226f4-4b09-40d9-8800-bb3e10cbf531_1173270acf634e2989cbbc9818313cb1_large.jpeg"
                      alt=""
                      className="product-item-img2"
                    />
                  </div>
                  <i
                    className="icon-eye ti-eye hide-on-mobile-tablet"
                    title="Xem nhanh"
                  />
                  <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                </div>
                <div className="product-name-box text-center">
                  <a href className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="product-items">
                  <div className="product-item-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/1cae6e07-b7cf-47ef-be84-312fe8624ac6_22dc8ea3a62149b89d122358b7a7c561_large.jpeg"
                      alt=""
                      className="product-item-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/a21d8180-8d30-4b60-b216-99ecc776a345_2598ffa046ce48e68546e00b1d09a72a_large.jpeg"
                      alt=""
                      className="product-item-img2"
                    />
                  </div>
                  <i
                    className="icon-eye ti-eye hide-on-mobile-tablet"
                    title="Xem nhanh"
                  />
                  <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                </div>
                <div className="product-name-box text-center">
                  <a href className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="product-items">
                  <div className="product-item-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/3a40e204-3a90-45c4-995e-364f2bcf33c5_46bef1ba93964783b35f15efc94790cc_large.jpeg"
                      alt=""
                      className="product-item-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/f5d7907f-263c-481f-bbb8-54ef86781258_2f7b94c822364ecb96c84631f54c1c50_large.jpeg"
                      alt=""
                      className="product-item-img2"
                    />
                  </div>
                  <i
                    className="icon-eye ti-eye hide-on-mobile-tablet"
                    title="Xem nhanh"
                  />
                  <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                </div>
                <div className="product-name-box text-center">
                  <a href className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
            </div>
          </div>
        </>
      </Fragment>
    );
  }
}

export default ProductDetail;
