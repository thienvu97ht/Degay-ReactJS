import * as types from "../constants/ActionTypes";

var initialState = {
  isOpenProductDetail: false,
  isOpenCartModal: false,
  isOpenMenuModal: false,
  isOpenSearchModal: false,
  isOpenMessageModal: false,
  isRequiredSize: false,
};

var isDisplayModal = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_PRODUCT_MODAL:
      state.isOpenProductDetail = true;
      return state;
    case types.CLOSE_PRODUCT_MODAL:
      state.isOpenProductDetail = false;
      return state;
    case types.OPEN_CART:
      state.isOpenCartModal = true;
      return state;
    case types.CLOSE_CART:
      state.isOpenCartModal = false;
      return state;
    case types.OPEN_MENU_MOBILE:
      state.isOpenMenuModal = true;
      return state;
    case types.CLOSE_MENU_MOBILE:
      state.isOpenMenuModal = false;
      return state;
    case types.OPEN_SEARCH:
      state.isOpenSearchModal = true;
      return state;
    case types.CLOSE_SEARCH:
      state.isOpenSearchModal = false;
      return state;
    case types.OPEN_MESSAGE:
      state.isOpenMessageModal = true;
      return state;
    case types.CLOSE_MESSAGE:
      state.isOpenMessageModal = false;
      return state;

    /* Required Size */
    case types.REQUIRED_SIZE:
      state.isRequiredSize = true;
      return state;
    default:
      return state;
  }
};

export default isDisplayModal;
