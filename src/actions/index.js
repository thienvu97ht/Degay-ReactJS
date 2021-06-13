import * as Types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

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

export const openProductModal = () => {
  return {
    type: Types.OPEN_PRODUCT_MODAL,
  };
};

export const closeProductModal = () => {
  return {
    type: Types.CLOSE_PRODUCT_MODAL,
  };
};

/* API */

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};
