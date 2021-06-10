import * as Types from "../constants/ActionTypes";

export const openCart = () => {
  return {
    type: Types.OPEN_CART,
  };
};

export const closeCart = () => {
  return {
    type: Types.CLOSE_CART,
  };
};
