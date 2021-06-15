import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
// import { Link } from "react-router-dom";

// const images = [
//   {
//     src: "https://product.hstatic.net/1000281824/product/e8ab76c2-b57c-4861-836b-685b9d73dcf5_7fb1655340114ca7bf2a480718c7199d_grande.jpeg",
//   },
//   {
//     src: "https://product.hstatic.net/1000281824/product/e2e226f4-4b09-40d9-8800-bb3e10cbf531_1173270acf634e2989cbbc9818313cb1_grande.jpeg",
//   },
//   {
//     src: "https://product.hstatic.net/1000281824/product/9f2fee31-4ed7-45ac-b8d3-47fb3389959c_99e325a42b3b4921a05f81929bca02ef_grande.jpeg",
//   },
//   {
//     src: "https://product.hstatic.net/1000281824/product/aa537864-cfa3-42ad-9a9f-5be1b23f4827_128761ceea22403788c0dac679bdbcf4_grande.jpeg",
//   },
// ];

class ProductDetail extends Component {
  state = {
    id: "",
    images: "",
  };

  static getDerivedStateFromProps(props, state) {
    if (props.product.id !== state.id) {
      props.onViewProductDetail(props.match.params.id);
      props.fetchAllProducts()
      return {
        id: props.product.id,
        images: props.product.images,
      };
    }
    return null;
  }

  // componentDidMount() {
  //   var { match } = this.props;
  //   if (match) {
  //     var id = match.params.id;
  //     this.props.onViewProductDetail(id);
  //   }
  // }

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
          relatedProducts.push(products[i])
        }
      }
      products = relatedProducts.slice(0, 4)
      result = products.map((product, index) => {
        return (
          <RelatedProducts key={index} product={product} />
        )
      })
    }
    return result;
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
    this.showRelatedProducts(products, product.collections)
    return (
      <Fragment>
        <>
          <div className="product-detail-container">
            <div className="grid wide">
              <div className="row">
                <div className="col l-6 m-12 c-10 c-o-1 detail-product-left">
                  <Slider {...settings}>{this.showSilder(images)}</Slider>
                </div>

                <div className="col l-6 m-12 c-10 c-o-1 detail-product-right">
                  <div>
                    <h1 className="product-detail-title">{product.name}</h1>
                    <p className="category-product">{collections}</p>
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
                    <p className="product-detail_price">{price} VND</p>
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
              {this.showRelatedProducts(products, product.collections)}
            </div>
          </div>
        </>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.viewProduct,
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onViewProductDetail: (id) => {
      dispatch(actions.actGetProductRequest(id));
    },
    fetchAllProducts: () => {
      dispatch(actions.actFetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);



