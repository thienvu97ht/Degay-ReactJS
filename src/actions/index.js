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

export const openMenu = () => {
  return {
    type: Types.OPEN_MENU_MOBILE,
  };
};

export const closeMenu = () => {
  return {
    type: Types.CLOSE_MENU_MOBILE,
  };
};

export const openSearch = () => {
  return {
    type: Types.OPEN_SEARCH,
  };
};

export const closeSearch = () => {
  return {
    type: Types.CLOSE_SEARCH,
  };
};
