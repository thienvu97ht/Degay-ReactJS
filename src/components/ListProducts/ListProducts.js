import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import ProductItem from "../ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    callApi("products", "GET", null).then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    var { products } = this.state;

    return (
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
    );
  }

  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} />;
      });
    }

    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ListProducts);
