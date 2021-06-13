import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Menu from "../components/Menu/Menu";

class MenuContainer extends Component {
  render() {
    var { onOpenCartModal } = this.props;
    return <Menu onOpenCartModal={onOpenCartModal} />;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
