import * as types from "../constants/ActionTypes";

var initialState = {
  isOpenProductDetail: false,
};

var isDisplayModal = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_PRODUCT_MODAL:
      state.isOpenProductDetail = true;
      return state;
    case types.CLOSE_PRODUCT_MODAL:
      state.isOpenProductDetail = false;
      return state;
    default:
      return state;
  }
};

export default isDisplayModal;
