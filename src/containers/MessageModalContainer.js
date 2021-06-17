import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import MessageModal from "../components/Modal/MessageModal/MessageModal";

class MessageModalContainer extends Component {
  render() {
    var { onCloseMessageModal, isDisplayModal, products } = this.props;
    return (
      <MessageModal
        products={products}
        isDisplayModal={isDisplayModal}
        onCloseMessageModal={onCloseMessageModal}
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
    onCloseMessageModal: () => {
      dispatch(actions.closeMessage());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModalContainer);
