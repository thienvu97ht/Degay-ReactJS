import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import RelatedProductsContainer from "../../containers/RelatedProductsContainer";
import ProductDetailModalContainer from "../../containers/ProductDetailModalContainer";
import MessageModalContainer from "../../containers/MessageModalContainer";

class ProductDetail extends Component {
  state = {
    id: "",
    images: "",
    size: "",
    quantity: 1,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.product.id !== state.id) {
      props.onViewProductDetail(props.match.params.id);
      return {
        id: props.product.id,
        images: props.product.images,
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

  showRelatedProducts = (products, collections) => {
    var result = "";
    if (products && collections) {
      var relatedProducts = [];
      for (var i = 0; i < products.length; i++) {
        if (products[i].collections === collections) {
          relatedProducts.push(products[i]);
        }
      }
      products = relatedProducts.slice(0, 4);
      result = products.map((product, index) => {
        return <RelatedProductsContainer key={index} product={product} />;
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

    var { product, products } = this.props;
    var price = product.price
      ? product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : "";
    var collections = product.collections
      ? product.collections.toUpperCase()
      : "";
    var { images } = this.state;

    return (
      <Fragment>
        <div className="product-detail-container">
          <div className="grid wide">
            <div className="row">
              <div className="col l-6 m-12 c-10 c-o-1 detail-product-left">
                <Slider {...settings}>{this.showSilder(images)}</Slider>
              </div>

              {collections === "ACCESSORIES"}
              <div className="col l-6 m-12 c-10 c-o-1 detail-product-right">
                <form onSubmit={this.onSave} name={`form${product.id}`}>
                  <h1 className="product-detail-title">{product.name}</h1>
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
                  <p className="product-detail_price">{price} VND</p>
                  <button type="submit" className="product-detail_add-btn">
                    THÊM VÀO GIỎ
                  </button>
                </form>
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
            {this.showRelatedProducts(products, product.collections)}
          </div>
        </div>

        <ProductDetailModalContainer />
        <MessageModalContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.productsInCart,
    product: state.viewProduct,
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onViewProductDetail: (id) => {
      dispatch(actions.actGetProductRequest(id));
    },
    onAddProductInCart: (product) => {
      dispatch(actions.actonAddProductToCartRequest(product));
    },
    onUpdateProductInCart: (product) => {
      dispatch(actions.actUpdateProductToCartRequest(product));
    },
    onOpenMessageModal: () => {
      dispatch(actions.openMessage());
    },
    isRequiredSize: () => {
      dispatch(actions.onRequiredSize());
    },
    onCloseMessageModal: () => {
      dispatch(actions.offRequiredSize());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
