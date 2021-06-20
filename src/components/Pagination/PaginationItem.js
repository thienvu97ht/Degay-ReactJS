import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

class PaginationItem extends Component {
  onSendCurrentPage = () => {
    var { current } = this.props;
    this.props.onSendCurenPage(current);
  };

  render() {
    var { current, currentPage } = this.props;
    return (
      <li
        onClick={this.onSendCurrentPage}
        className={
          current === currentPage
            ? "product-pagination-item active"
            : "product-pagination-item"
        }>
        {current}
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSendCurenPage: (current) => {
      dispatch(actions.sendCurenPage(current));
    },
  };
};

export default connect(null, mapDispatchToProps)(PaginationItem);
