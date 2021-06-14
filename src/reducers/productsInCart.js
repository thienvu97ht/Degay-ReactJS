import * as Types from "../constants/ActionTypes";

var initialState = [];

var productsInCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS_IN_CART:
      state = action.productsInCart;
      return [...state];
    default:
      return [...state];
  }
};

export default productsInCart;
