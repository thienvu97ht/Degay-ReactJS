import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Menu from "../components/Menu/Menu";

class MenuContainer extends Component {
  render() {
    var { onOpenCartModal, onOpenMenuModal, onOpenSerchModal } = this.props;
    return (
      <Menu
        onOpenCartModal={onOpenCartModal}
        onOpenMenuModal={onOpenMenuModal}
        onOpenSerchModal={onOpenSerchModal}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenCartModal: () => {
      dispatch(actions.openCart());
    },
    onOpenMenuModal: () => {
      dispatch(actions.openMenu());
    },
    onOpenSerchModal: () => {
      dispatch(actions.openSearch());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
