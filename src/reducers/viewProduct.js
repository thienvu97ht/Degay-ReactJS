import * as Types from "../constants/ActionTypes";

var initialState = {};

var viewProduct = (state = initialState, action) => {
  switch (action.type) {
    case Types.VIEW_PRODUCT_DETAIL:
      state = action.product;
      return action.product;

    default:
      return state;
  }
};

export default viewProduct;
