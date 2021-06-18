import React, { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import ListProductsContainer from "../../containers/ListProductsContainter";

class Search extends Component {
  render() {
    return (
      <Fragment>
        <div className="search-container">
          <p className="search-container-text">Kết quả tìm kiếm cho: "Áo"</p>
        </div>

        <ListProductsContainer />
      </Fragment>
    );
  }
}

export default Search;
