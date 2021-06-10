import * as types from "../constants/ActionTypes";

var initialState = {
  isOpenCart: false,
  isOpenNavMobie: false,
  isOpenSearch: false,
  isModalOpen: false,
}; // close form

var isDisplayModal = (state = initialState, action) => {
  switch (action.type) {
    case types.CLOSE_CART:
      console.log(action);
      return state;
    case types.OPEN_CART:
      state.isModalOpen = true;
      state.isOpenCart = true;
      return state;
    default:
      return state;
  }
};

export default isDisplayModal;
