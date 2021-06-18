import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import SearchModal from "../components/Modal/SearchModal/SearchModal";

class SearchModalContainer extends Component {
  render() {
    var { products, isDisplayModal, onCloseSearchModal, onSendKeyword } =
      this.props;
    return (
      <SearchModal
        products={products}
        onSendKeyword={onSendKeyword}
        isDisplayModal={isDisplayModal}
        onCloseSearchModal={onCloseSearchModal}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isDisplayModal: state.isDisplayModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCloseSearchModal: () => {
      dispatch(actions.closeSearch());
    },
    onSendKeyword: (keyword) => {
      dispatch(actions.sendKeyword(keyword));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModalContainer);
