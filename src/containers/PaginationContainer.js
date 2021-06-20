import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Pagination from "../components/Pagination/Pagination";

class PaginationContainer extends Component {
  render() {
    var { paging, products, onSendPagingValue } = this.props;
    return (
      <Pagination
        paging={paging}
        products={products}
        onSendPagingValue={onSendPagingValue}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    paging: state.paging,
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSendPagingValue: (pagingValue) => {
      dispatch(actions.sendPagingValue(pagingValue));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
