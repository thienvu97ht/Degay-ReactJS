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
    size: "",
    price: "",
    quantity: 1,
    collections: "",
  };

  onCloseProductDetal = () => {
    this.props.onCloseProductModal();
    this.setState({
      isOpenProductDetail: this.props.isDisplayModal.isOpenProductDetail,
    });
  };

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

  addOrUpdate(product, productsInCart) {
    var newProduct = [];
    for (var i = 0; i < productsInCart.length; i++) {
      if (
        productsInCart[i].productId === product.productId &&
        productsInCart[i].size === product.size
      ) {
        productsInCart[i].quantity += product.quantity;
        newProduct = productsInCart;
        this.props.onUpdateProductInCart(productsInCart[i]);
      }
    }
    if (newProduct.length === 0) {
      this.props.onAddProductInCart(product);
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    var { productsInCart } = this.props;
    var { id, size, quantity } = this.state;
    quantity = parseInt(quantity);
    var product = {
      productId: id,
      size: size,
      quantity: quantity,
    };

    /* Open Message */
    this.isOpenMessageModal(product, productsInCart);
  };

  isOpenMessageModal = (product, productsInCart) => {
    var collection = this.props.product.collections;
    this.props.onOpenMessageModal();

    if (collection !== "accessories" && product.size === "") {
      /* Bắt buộc chọn size */
      this.props.isRequiredSize();
    } else if (collection !== "accessories" && product.size !== "") {
      this.props.onCloseMessageModal();
      this.addOrUpdate(product, productsInCart);
    } else {
      this.props.onCloseMessageModal();
      this.addOrUpdate(product, productsInCart);
    }
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
    price = price
      ? price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : "";
    collections = collections ? collections.toUpperCase() : "";
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
                <Slider {...settings_2}>{this.showSilder(images)}</Slider>
              </div>
              <form
                onSubmit={this.onSave}
                className="col l-6 detail-product-right-modal">
                <h1 className="modal-title-product">{name}</h1>
                <p className="category-product">{collections}</p>

                {/* Product detail size box */}
                <div
                  className={
                    collections === "ACCESSORIES"
                      ? "product-detail_size-box hidden-size-box"
                      : "product-detail_size-box"
                  }>
                  <p className="size-title">Kích thước</p>
                  <div data-value="NHỎ" className="size-input-box">
                    <input
                      onChange={this.onChange}
                      id="nho"
                      type="radio"
                      name="size"
                      defaultValue="NHỎ"
                    />
                    <label htmlFor="nho">NHỎ</label>
                  </div>
                  <div data-value="TRUNG" className="size-input-box">
                    <input
                      onChange={this.onChange}
                      id="trung"
                      type="radio"
                      name="size"
                      defaultValue="TRUNG"
                    />
                    <label htmlFor="trung">TRUNG</label>
                  </div>
                  <div data-value="LỚN" className="size-input-box">
                    <input
                      onChange={this.onChange}
                      id="lon"
                      type="radio"
                      name="size"
                      defaultValue="LỚN"
                    />
                    <label htmlFor="lon">LỚN</label>
                  </div>
                </div>

                <div className="quantity-product-box">
                  <p className="size-title">Số lượng</p>
                  <input
                    onChange={this.onChange}
                    type="text"
                    name="quantity"
                    defaultValue={1}
                    className="quantity-input"
                  />
                </div>
                <p className="modal-product-price">{price} VND</p>
                <button type="submit" className="modal-add-product-btn">
                  THÊM VÀO GIỎ
                </button>
              </form>
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
