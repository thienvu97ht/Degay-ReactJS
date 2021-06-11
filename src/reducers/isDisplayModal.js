import * as types from "../constants/ActionTypes";

var initialState = {
  isOpenCart: false,
};

var isDisplayModal = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_CART:
      state.isOpenCart = true;
      return state;
    case types.CLOSE_CART:
      return false;
    case types.OPEN_MENU_MOBILE:
      return true;
    case types.CLOSE_MENU_MOBILE:
      return false;
    case types.OPEN_SEARCH:
      return true;
    case types.CLOSE_SEARCH:
      return false;
    default:
      return state;
  }
};

export default isDisplayModal;
