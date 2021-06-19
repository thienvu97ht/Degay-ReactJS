import { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ProductItemContainer from "../../containers/ProductItemContainer";
import ProductDetailModalContainer from "../../containers/ProductDetailModalContainer";
import MessageModalContainer from "../../containers/MessageModalContainer";

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.products !== state.products) {
      return {
        products: props.products,
      };
    }
    return null;
  }

  convertViToEn = (str, toUpperCase = false) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

    return toUpperCase ? str.toUpperCase() : str;
  };

  filterProducts = () => {
    var { keyword, products } = this.props;
    var result = [];
    if (keyword) {
      result = products.filter((product) => {
        return (
          this.convertViToEn(product.name, true).indexOf(
            this.convertViToEn(keyword, true)
          ) !== -1
        );
      });
    } else {
      return products;
    }

    return result;
  };

  showProducts = (products) => {
    var { keyword } = this.props;
    var result = null;
    if (keyword.length > 0) {
      var productsBySearch = this.filterProducts();
      result = productsBySearch.map((product, index) => {
        return <ProductItemContainer key={index} product={product} />;
      });
    } else if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItemContainer key={index} product={product} />;
      });
    }

    return result;
  };

  render() {
    var { products } = this.state;
    return (
      <Fragment>
        <div className="list-products-container">
          <div className="products-filter-container">
            <div className="filter-left"></div>
            <div className="filter-right">
              <p className="filter-right-text">Sắp Xếp:</p>
              <select className="custom-dropdown__select">
                <option value="manual">Sản phẩm nổi bật</option>
                <option value="price-ascending">Giá: Tăng dần</option>
                <option value="price-descending">Giá: Giảm dần</option>
                <option value="title-ascending">Tên: A-Z</option>
                <option value="title-descending">Tên: Z-A</option>
                <option value="best-selling">Bán chạy nhất</option>
              </select>
            </div>
          </div>
          <div className="grid wide">
            <div className="row">{this.showProducts(products)}</div>
          </div>
          <div className="product-pagination">
            <ul className="product-pagination-list">
              <li className="product-pagination-item hiden">
                <a href="!#">
                  <i className="ti-angle-double-left" />
                </a>
              </li>
              <li className="product-pagination-item active">
                <a href="!#">1</a>
              </li>
              <li className="product-pagination-item">
                <a href="!#">2</a>
              </li>
              <li className="product-pagination-item">
                <a href="!#">3</a>
              </li>
              <li className="product-pagination-item">...</li>
              <li className="product-pagination-item">
                <a href="!#">7</a>
              </li>
              <li className="product-pagination-item">
                <a href="!#">
                  <i className="ti-angle-double-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ProductDetailModalContainer />
        <MessageModalContainer />
      </Fragment>
    );
  }
}

export default ListProducts;
