import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import NavBarMobileModal from "../components/Modal/NavBarMobileModal/NavBarMobileModal";

class NavBarMobileModalContainer extends Component {
  render() {
    var { products, isDisplayModal, onCloseMenuModal } = this.props;
    return (
      <NavBarMobileModal
        products={products}
        isDisplayModal={isDisplayModal}
        onCloseMenuModal={onCloseMenuModal}
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
    onCloseMenuModal: () => {
      dispatch(actions.closeMenu());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarMobileModalContainer);
