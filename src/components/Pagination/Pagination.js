import { Component } from "react";
import PaginationItem from "./PaginationItem";

class Pagination extends Component {
  nextPage = () => {
    var { products } = this.props;
    var { perPage, currentPage, start } = this.props.paging;
    let totalPages = Math.ceil(products.length / perPage);
    currentPage++;
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    start = (currentPage - 1) * perPage;

    let pagingValue = {
      perPage,
      currentPage,
      start,
    };

    this.props.onSendPagingValue(pagingValue);
  };

  prevPage = () => {
    var { perPage, currentPage, start } = this.props.paging;
    currentPage--;
    if (currentPage <= 1) {
      currentPage = 1;
    }

    start = (currentPage - 1) * perPage;

    let pagingValue = {
      perPage,
      currentPage,
      start,
    };

    this.props.onSendPagingValue(pagingValue);
  };

  showListPage = () => {
    var result = [];
    var { products } = this.props;
    var { perPage, currentPage } = this.props.paging;
    let totalPages = Math.ceil(products.length / perPage);
    if (products.length > 0) {
      for (let i = 1; i <= totalPages; i++) {
        result.push(
          <PaginationItem key={i} current={i} currentPage={currentPage} />
        );
      }
    }

    return result;
  };

  render() {
    let { products } = this.props;
    let { currentPage, perPage } = this.props.paging;
    let totalPages = Math.ceil(products.length / perPage);
    return (
      <div className="product-pagination">
        <ul className="product-pagination-list">
          <li
            onClick={this.prevPage}
            className={
              currentPage === 1
                ? "product-pagination-item hiden"
                : "product-pagination-item"
            }>
            &#60;
          </li>
          {this.showListPage()}
          <li
            onClick={this.nextPage}
            className={
              currentPage === totalPages
                ? "product-pagination-item hiden"
                : "product-pagination-item"
            }>
            &#62;
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
