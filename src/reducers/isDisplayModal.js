import * as types from "../constants/ActionTypes";

var initialState = false;

var isDisplayModal = (state = initialState, action) => {
  switch (action.type) {
    case types.CLOSE_CART:
      return false;
    case types.OPEN_CART:
      return true;
    default:
      return state;
  }
};

export default isDisplayModal;
