import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProductDetailModal extends Component {
  state = {
    isOpenProductDetail: this.props.isDisplayModal.isOpenProductDetail,
    id: "",
    name: "",
    images: "",
    price: "",
    collections: ""
  };

  onCloseProductDetal = () => {
    this.props.onCloseProductModal();
    this.setState({
      isOpenProductDetail: this.props.isDisplayModal.isOpenProductDetail,
    });
  };

  onChange = (e) => {

  }

  static getDerivedStateFromProps(props, state) {
    var { id, name, images, price, collections } = props.product;
    if (
      props.isDisplayModal.isOpenProductDetail !== state.isOpenProductDetail
    ) {
      return {
        isOpenProductDetail: props.isDisplayModal.isOpenProductDetail,
        id: id,
        name: name,
        images: images,
        price: price,
        collections: collections,
      };
    }
    return null;
  }

  showSilder = (images) => {
    var result = "";
    if (images) {
      result = images.map((img, index) => {
        return (
          <div key={index} className="detail-product-img sv-slider-item">
            <img alt="" src={img.src} />
          </div>
        );
      });
    }

    return result;
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
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    var { isOpenProductDetail, name, images, price, collections } = this.state;
    price = price ? price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : "";
    collections = collections ? collections.toUpperCase()
      : "";
    return (
      <div
        className={isOpenProductDetail === true ? "modal-product-detail" : ""}>
        <div
          className={
            isOpenProductDetail === true ? "modal__overlay-product-detail" : ""
          }
          onClick={this.onCloseProductDetal}
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
                  {this.showSilder(images)}
                </Slider>
              </div>
              <div className="col l-6 detail-product-right-modal">
                <h1 className="modal-title-product">
                  {name}
                </h1>
                <p className="category-product">{collections}</p>
                <div className="modal-size-box">
                  <p className="size-title">Kích thước</p>
                  <div data-value="NHỎ" className="size-input-box">
                    <input
                      id="swatch-0-nh"
                      type="radio"
                      name="option-0"
                      defaultValue="NHỎ"
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
                    onChange={this.onChange}
                    value={1}
                    className="quantity-input"
                  />
                </div>
                <p className="modal-product-price">{price} VND</p>
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
