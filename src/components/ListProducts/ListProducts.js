import { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ProductItemContainer from "../../containers/ProductItemContainer";
import ProductDetailModalContainer from "../../containers/ProductDetailModalContainer";
import MessageModalContainer from "../../containers/MessageModalContainer";
import PaginationContainer from "../../containers/PaginationContainer";

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectValue: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

  filterProductsByStatus = (products, selectValue) => {
    switch (selectValue) {
      case "price-ascending":
        products = products.sort((a, b) => a.price - b.price);
        return products;
      case "price-descending":
        products = products.sort((a, b) => b.price - a.price);
        return products;
      case "title-ascending":
        products = products.sort((a, b) => a.name.localeCompare(b.name));
        return products;
      case "title-descending":
        products = products.sort((a, b) => b.name.localeCompare(a.name));
        return products;
      case "best-selling":
        products = products.sort((a, b) => b.sold - a.sold);
        return products;
      case "manual":
        return products;
      default:
        return products;
    }
  };

  showProducts = (products, start, end) => {
    var { keyword } = this.props;
    var result = null;
    if (keyword.length > 0) {
      var productsBySearch = this.filterProducts();
      result = productsBySearch.map((product, index) => {
        if (index >= start && index < end) {
          return <ProductItemContainer key={index} product={product} />;
        }
        return null;
      });
    } else if (products.length > 0) {
      result = products.map((product, index) => {
        if (index >= start && index < end) {
          return <ProductItemContainer key={index} product={product} />;
        }
        return null;
      });
    }

    return result;
  };

  onChange = (e) => {
    var targer = e.target;
    var name = targer.name;
    var value = targer.type === "checkbox" ? targer.checked : targer.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { products, selectValue } = this.state;
    products = this.filterProductsByStatus(products, selectValue);
    let { perPage, currentPage, start } = this.props.paging;
    let end = currentPage * perPage;
    return (
      <Fragment>
        <div className="list-products-container">
          <div className="products-filter-container">
            <div className="filter-left"></div>
            <form className="filter-right">
              <p className="filter-right-text">Sắp Xếp:</p>
              <select
                name="selectValue"
                value={selectValue}
                onChange={this.onChange}
                className="custom-dropdown__select">
                <option value="manual">Sản phẩm nổi bật</option>
                <option value="price-ascending">Giá: Tăng dần</option>
                <option value="price-descending">Giá: Giảm dần</option>
                <option value="title-ascending">Tên: A-Z</option>
                <option value="title-descending">Tên: Z-A</option>
                <option value="best-selling">Bán chạy nhất</option>
              </select>
            </form>
          </div>
          <div className="grid wide">
            <div className="row">{this.showProducts(products, start, end)}</div>
          </div>
          <PaginationContainer />
        </div>
        <ProductDetailModalContainer />
        <MessageModalContainer />
      </Fragment>
    );
  }
}

export default ListProducts;
