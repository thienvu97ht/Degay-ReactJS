import React, { Component } from "react";
import CartModal from "./CartModal/CartModal";
import NavBarMobileModal from "./NavBarMobileModal/NavBarMobileModal";
import SearchModal from "./SearchModal/SearchModal";

class ModalNavbar extends Component {
  render() {
    var { isOpenCart, isOpenNavMobie, isOpenSearch, isModalOpen } = this.props;
    return (
      <div className={isModalOpen ? "modal active" : "modal"}>
        <div className="modal__overlay" onclick="closeModal()" />
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

export default ModalNavbar;
