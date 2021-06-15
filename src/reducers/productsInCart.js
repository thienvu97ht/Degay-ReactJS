import * as Types from "../constants/ActionTypes";

var initialState = [];

var productsInCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS_IN_CART:
      state = action.productsInCart;
      return [...state];
    case Types.ADD_PRODUCT_TO_CARD:
      state.push(action.product)
      return [...state];
    default:
      return [...state];
  }
};

export default productsInCart;
