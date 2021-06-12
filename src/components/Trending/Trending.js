import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ProductDetailModal from "../Modal/ProductDetailModal/ProductDetailModal";

class Trending extends Component {
  state = {
    isOpenProductDetail: false,
  };

  isOpenProductDetail = () => {
    this.setState({ isOpenProductDetail: !this.state.isOpenProductDetail });
  };

  isCloseProductDetail = (params) => {
    this.setState({ isOpenProductDetail: params });
    console.log(params);
  };

  render() {
    var { isOpenProductDetail } = this.state;
    return (
      <Fragment>
        <div className="container__trending">
          <div className="grid wide">
            <h4 className="app__container-title">Sản phẩm bán chạy</h4>
            <div className="row">
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/71d141bb-580d-4270-9abb-420a0c909d95_e7d101fe66ad451c8ab1b38ff40fa582_large.jpeg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/d8b5b151-57cc-414f-bfec-d909e798aa20_5a5da2462e2142c592b4bafadd628dad_large.jpeg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button
                    onClick={this.isOpenProductDetail}
                    className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/e8ab76c2-b57c-4861-836b-685b9d73dcf5_7fb1655340114ca7bf2a480718c7199d_large.jpeg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/e2e226f4-4b09-40d9-8800-bb3e10cbf531_1173270acf634e2989cbbc9818313cb1_large.jpeg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/1cae6e07-b7cf-47ef-be84-312fe8624ac6_22dc8ea3a62149b89d122358b7a7c561_large.jpeg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/a21d8180-8d30-4b60-b216-99ecc776a345_2598ffa046ce48e68546e00b1d09a72a_large.jpeg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/3a40e204-3a90-45c4-995e-364f2bcf33c5_46bef1ba93964783b35f15efc94790cc_large.jpeg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/f5d7907f-263c-481f-bbb8-54ef86781258_2f7b94c822364ecb96c84631f54c1c50_large.jpeg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/884bee27-52cc-4ecb-af61-caa888061099_529fbec10f994443b6e060412ec63962_large.jpeg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/896c8427-e613-4f0a-b05e-c1efc8888cf5_ffdf931f34504beab6c672b706d85fa0_large.jpeg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/bec86666-7bba-4637-b1c4-5952403300f0_a6c87791ca344717966185c2865b4fd5_large.jpeg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/98c11f37-b30f-4efc-b0dc-77579f4f50a9_5d73717563d74cb28eb9bdaed9374760_large.jpeg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/3db8bf3c-f95d-44b3-b350-2d90315524f4_baf98af3c7e74bf895f26745ca3758cd_large.jpeg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/2f9abbf6-32da-4f1d-b732-21a99ab1032e_3c0eda6ed0b4448793112a8d1b4b1970_large.jpeg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
                    Áo 2 Cổ Degrey - A2C
                  </a>
                </div>
                <div className="product-price text-center">
                  <p className="product-price-number">290,000</p>
                  <p className="currency-unit">đ</p>
                </div>
              </div>
              <div className="col l-3 m-6 c-10 c-o-1">
                <div className="container__trending-item">
                  <div className="container__trending-img">
                    <img
                      src="https://product.hstatic.net/1000281824/product/1-te9101-1_a05196cc3b664d909a378da8d5fe5171_grande.jpg"
                      alt=""
                      className="container__trending-img1"
                    />
                    <img
                      src="https://product.hstatic.net/1000281824/product/1-te9101-2_ce8bd8b50c2b4f8ba2640cef578f2308_large.jpg"
                      alt=""
                      className="container__trending-img2"
                    />
                  </div>
                  <button className="quick-view-btn">
                    <i
                      className="icon-eye ti-eye hide-on-mobile-tablet"
                      title="Xem nhanh"
                    />
                  </button>
                  <button className="add-cart-btn">
                    <i className="icon-bag ti-bag" title="Thêm vào giỏ hàng" />
                  </button>
                </div>
                <div className="product-name-box text-center">
                  <a href="!#" className="product-name">
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
        </div>

        <ProductDetailModal
          isOpenProductDetail={isOpenProductDetail}
          isCloseProductDetail={this.isCloseProductDetail}
        />
      </Fragment>
    );
  }
}

export default Trending;
