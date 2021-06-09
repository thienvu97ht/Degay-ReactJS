import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ListProducts from "../ListProducts/ListProducts";

class Search extends Component {
  render() {
    return (
      <Fragment>
        <div className="search-container">
          <p className="search-container-text">Kết quả tìm kiếm cho: "Áo"</p>
        </div>

        <ListProducts />
      </Fragment>
    );
  }
}

export default Search;
