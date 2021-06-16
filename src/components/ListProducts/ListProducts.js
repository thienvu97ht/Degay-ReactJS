import { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ProductItemContainer from "../../containers/ProductItemContainer";
import ProductDetailModalContainer from "../../containers/ProductDetailModalContainer"

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
        products: props.products
      };
    }
    return null;
  }

  render() {
    var { products } = this.state;

    return (
      <Fragment>
        <div className="list-products-container">
          <div className="products-filter-container">
            <div className="filter-left">
              <ul className="product-filter-list">
                <li className="product-filter-item active-ui">
                  <a href="!#" className="filter-icon-link ">
                    <i className="filter-icon fa fa-th-large" />
                  </a>
                </li>
                <li className="product-filter-item">
                  <a href="!#" className="filter-icon-link">
                    <i className="filter-icon fa fa-th-list" />
                  </a>
                </li>
              </ul>
            </div>
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
      </Fragment>
    );
  }

  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItemContainer key={index} product={product} />;
      });
    }

    return result;
  };
}

export default ListProducts;
