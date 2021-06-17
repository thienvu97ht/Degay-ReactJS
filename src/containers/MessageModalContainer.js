import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import MessageModal from "../components/Modal/MessageModal/MessageModal";

class MessageModalContainer extends Component {
  render() {
    var { onCloseMessageModal, isDisplayModal, products, onCloseProductModal } =
      this.props;
    return (
      <MessageModal
        products={products}
        isDisplayModal={isDisplayModal}
        onCloseMessageModal={onCloseMessageModal}
        onCloseProductModal={onCloseProductModal}
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
    onCloseProductModal: () => {
      dispatch(actions.closeProductModal());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModalContainer);
