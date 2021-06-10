import React, { Component } from "react";
import CartModal from "./CartModal/CartModal";
import NavBarMobileModal from "./NavBarMobileModal/NavBarMobileModal";
import SearchModal from "./SearchModal/SearchModal";
import { connect } from "react-redux";

class ModalNavbar extends Component {
  render() {
    var { isOpenCart, isOpenNavMobie, isOpenSearch, isModalOpen } =
      this.props.isDisplayModal;
    console.log(this.props.isDisplayModal);
    return (
      <div className={isModalOpen ? "modal active" : "modal"}>
        <div className="modal__overlay" />
        {/* Modal cart */}
        {isOpenCart ? <CartModal isOpenCart={isOpenCart} /> : ""}
        {/* Modal menu mobile */}
        {isOpenNavMobie ? (
          <NavBarMobileModal isOpenNavMobie={isOpenNavMobie} />
        ) : (
          ""
        )}
        {/* Modal search */}
        {isOpenSearch ? <SearchModal isOpenSearch={isOpenSearch} /> : ""}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayModal: state.isDisplayModal,
  };
};

export default connect(mapStateToProps, null)(ModalNavbar);
