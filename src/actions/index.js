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

/* PRODUCTS IN CART */
export const actFetchProductsInCartRequest = () => {
  return (dispatch) => {
    return callApi("productsInCart", "GET", null).then((res) => {
      dispatch(actFetchProductsInCart(res.data));
    });
  };
};

export const actFetchProductsInCart = (productsInCart) => {
  return {
    type: Types.FETCH_PRODUCTS_IN_CART,
    productsInCart,
  };
};

/* VIEW PRODUCT DETAIL */
export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "GET", null).then((res) => {
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: Types.VIEW_PRODUCT_DETAIL,
    product,
  };
};
