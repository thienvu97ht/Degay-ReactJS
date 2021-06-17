import * as Types from "../constants/ActionTypes";

var initialState = [];

var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

var productsInCart = (state = initialState, action) => {
  var index = -1;
  var { id } = action;

  switch (action.type) {
    case Types.FETCH_PRODUCTS_IN_CART:
      state = action.productsInCart;
      return [...state];
    case Types.ADD_PRODUCT_TO_CARD:
      state.push(action.product);
      return [...state];
    case Types.UPDATE_PRODUCT_TO_CART:
      return [...state];

    case Types.DELETE_PRODUCT_IN_CART:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    default:
      return [...state];
  }
};

export default productsInCart;
