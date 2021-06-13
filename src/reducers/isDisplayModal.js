import * as types from "../constants/ActionTypes";

var initialState = {
  isOpenProductDetail: false,
  isOpenCartModal: false,
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
    default:
      return state;
  }
};

export default isDisplayModal;
