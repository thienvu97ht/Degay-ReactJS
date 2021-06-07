import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          {/* Nav bar */}
          <div id="header__navbar-scroll" className="header__navbar">
            <div className="header__navbar-left ">
              <ul className="header__navbar-list">
                <li className="header__navbar-item header__icon-menu">
                  <button
                    className="header__navbar-item-link"
                    onclick="showModalMenu()">
                    <i className="header__navbar-icon ti-menu" />
                  </button>
                </li>
                <li className="header__navbar-item hide-on-mobile-tablet">
                  <a
                    href="index.html"
                    className="header__navbar-item-link header__navbar-item-link-underline">
                    Trang chủ
                  </a>
                </li>
                <li className="header__navbar-item hide-on-mobile-tablet">
                  <a
                    href="listproducts.html"
                    className="header__navbar-item-link header__navbar-item-link-underline">
                    Sản phẩm
                  </a>
                  <div className="products-nav">
                    <ul className="products-nav-list">
                      <li className="products-nav-item">
                        <a href className="products-nav-item-link ">
                          TEE
                        </a>
                      </li>
                      <li className="products-nav-item">
                        <a href className="products-nav-item-link">
                          SWEATER
                        </a>
                      </li>
                      <li className="products-nav-item">
                        <a href className="products-nav-item-link">
                          HOODIE
                        </a>
                      </li>
                      <li className="products-nav-item">
                        <a href className="products-nav-item-link">
                          JEACKET
                        </a>
                      </li>
                      <li className="products-nav-item">
                        <a href className="products-nav-item-link">
                          PANTS
                        </a>
                      </li>
                      <li className="products-nav-item">
                        <a href className="products-nav-item-link">
                          ACCESSORIES
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="header__navbar-item hide-on-mobile-tablet">
                  <a
                    href="cuahang.html"
                    className="header__navbar-item-link header__navbar-item-link-underline">
                    Cửa hàng
                  </a>
                </li>
                <li className="header__navbar-item hide-on-mobile-tablet">
                  <a
                    href="gioithieu.html"
                    className="header__navbar-item-link header__navbar-item-link-underline">
                    Giới thiệu
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__navbar-center">
              <a href="index.html">
                <img
                  src="//theme.hstatic.net/1000281824/1000704890/14/logo.png?v=383"
                  className="header__navbar-brand-logo"
                  alt=""
                />
              </a>
            </div>
            <div className="header__navbar-right">
              <ul className="header__navbar-list">
                <li className="header__navbar-item hide-on-mobile-tablet">
                  <a
                    href="login.html"
                    className="header__navbar-item-link header__navbar-item-link-underline">
                    Đăng nhập
                  </a>
                </li>
                <li className="header__navbar-item hide-on-mobile-tablet">
                  <button
                    onclick="showModalSearch()"
                    className="header__navbar-item-link">
                    <i className="header__navbar-icon ti-search" />
                  </button>
                </li>
                <li className="header__navbar-item">
                  <button
                    onclick="showModalCart()"
                    className="header__navbar-item-link">
                    <i className="header__navbar-icon ti-bag" />
                  </button>
                  <span className="header__navbar-item-notice">2</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Slider */}
          <div className="sajid-1 owl-carousel owl-theme slide-container">
            <div className="item">
              <img
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.18172-8/25438939_1542853189141171_4157740623004633535_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=-PzuY_FeLPsAX9Gemst&_nc_ht=scontent.fsgn2-5.fna&oh=c43f5287d15691c79dfd3decff62e2e2&oe=60D68106"
                alt=""
                className="header__slider-img"
              />
            </div>
            <div className="item">
              <img
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.18172-8/15129665_1164652033627957_5431995798793249056_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=19026a&_nc_ohc=yJfUBkJ2JtYAX_lC1G6&_nc_ht=scontent.fsgn2-5.fna&oh=04727387050bde80ba211326dc06cf5c&oe=60D7026D"
                alt=""
                className="header__slider-img"
              />
            </div>
            <div className="item">
              <img
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/39403369_1853088631450957_6235328705950908416_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=HX7ro43CkqoAX9YtJsW&_nc_ht=scontent.fsgn2-5.fna&oh=eef268c560f7e6af6d98ec99eaaa271a&oe=60D543D5"
                alt=""
                className="header__slider-img"
              />
            </div>
          </div>
          {/* End Slide */}
        </div>
        <div className="app__container">
          {/* Sản phẩm bán chạy */}
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
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
                    <button
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
                    <button
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
                    <button
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
                    <button
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
                    <button
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
                    <button
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
                    <button
                      className="quick-view-btn"
                      onclick="showModalDetailProduct()">
                      <i
                        className="icon-eye ti-eye hide-on-mobile-tablet"
                        title="Xem nhanh"
                      />
                    </button>
                    <button className="add-cart-btn">
                      <i
                        className="icon-bag ti-bag"
                        title="Thêm vào giỏ hàng"
                      />
                    </button>
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
          </div>
          {/* Tin tức */}
          <div className="app__container-product">
            <div className="grid wide">
              <h4 className="app__container-title">Tin tức</h4>
              <div className="row news-content">
                <div className="js-carousel-catmain owl-theme">
                  <div className="col l-4 m-12 c-10 c-o-1 ">
                    <div className="container__product-item">
                      <img
                        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/121069130_3494939963932474_6093064416035987229_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=a26aad&_nc_ohc=w5hLXSCmDTcAX-oCHNz&tn=Laqnk5RZu9fU80Xi&_nc_ht=scontent.fsgn2-5.fna&oh=f64582f10b67c039f45eead494339ee9&oe=60D87189"
                        alt=""
                        className="news-item-img"
                      />
                      <h1 className="news-title">
                        1.000.000 FOLLOWERS ON FACEBOOK
                      </h1>
                      <div className="news-upload-info">
                        <p className="news-info">Đăng bởi</p>
                        <p className="news-author">DEGREY VN</p>
                        <p className="news-upload-date">9 Tháng 2, 2021</p>
                        <p className="news-comment">0 Bình luận</p>
                      </div>
                      <p className="news-text-content">
                        1.000.000 FOLLOWERS ON FACEBOOK- Cảm ơn các bạn đồng
                        hành cùng Degrey suốt thời gian qua. Để đền đáp lại mọi
                        sự yêu thương vô bờ bến tụi mình xin phép tổ chức event
                        như sau.- Với mỗi hoá đơn từ 1 triệu đồng
                        (1.000.000vnd)...
                      </p>
                    </div>
                  </div>
                  <div className="col l-4 m-12 c-10 c-o-1">
                    <div className="container__product-item">
                      <img
                        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/167549331_4040210996072032_6244063505369862654_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xmVFvfPtYrgAX8muSU9&_nc_ht=scontent.fsgn2-5.fna&oh=c5273eac067ae4a2f743bbb9cbfacb1d&oe=60D8BE8E"
                        alt=""
                        className="news-item-img"
                      />
                      <h1 className="news-title">
                        Cùng Degrey chung tay tuyên truyền phòng tránh Covid –
                        19
                      </h1>
                      <div className="news-upload-info">
                        <p className="news-info">Đăng bởi</p>
                        <p className="news-author">DEGREY VN</p>
                        <p className="news-upload-date">28 Tháng 3, 2020</p>
                        <p className="news-comment">0 Bình luận</p>
                      </div>
                      <p className="news-text-content">
                        Degrey – một trong những local brand nổi tiếng, đi đầu
                        trong phong cách thời trang đường phố, mới đây đã cho
                        thay đổi logo của mình nhằm kêu gọi tất cả mọi người tự
                        cách ly tại nhà, chủ động bảo vệ bản thân...
                      </p>
                    </div>
                  </div>
                  <div className="col l-4 m-12 c-10 c-o-1">
                    <div className="container__product-item">
                      <img
                        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/126092380_3609077525852050_7175847798993646698_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=y6SiHrO0r50AX9yUYfh&_nc_ht=scontent.fsgn2-6.fna&oh=2d09514743d86a6787eef806130d2ec9&oe=60D71596"
                        alt=""
                        className="news-item-img"
                      />
                      <h1 className="news-title">
                        MAKE LOVE NOT WAR - DEGREY x DIRTY COINS
                      </h1>
                      <div className="news-upload-info">
                        <p className="news-info">Đăng bởi</p>
                        <p className="news-author">DEGREY VN</p>
                        <p className="news-upload-date">8 Tháng 2, 2020</p>
                        <p className="news-comment">0 Bình luận</p>
                      </div>
                      <p className="news-text-content">
                        MAKE LOVE NOT WAR - DEGREY x DIRTY COINSPhát hành 11 giờ
                        11 phút sáng ngày 09/02/2020. Bộ sưu tập được bán tại
                        trang mạng http://degrey.vn - http://dirtycoins.vn
                      </p>
                    </div>
                  </div>
                </div>
                <div className="owl-nav show-on-mobile-tablet">
                  <div className="owl-prev-two">
                    <i className="ti-angle-left" />
                  </div>
                  <div className="owl-next-two">
                    <i className="ti-angle-right" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href className="load-more-news">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
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
