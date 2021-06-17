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

export const openMessage = () => {
  return {
    type: Types.OPEN_MESSAGE,
  };
};

export const closeMessage = () => {
  return {
    type: Types.CLOSE_MESSAGE,
  };
};
/* Quick view */

export const QuickViewProductModal = (product) => {
  return {
    type: Types.QUICK_VIEW_PRODUCT,
    product,
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
/* GET */
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

/* POST */
export const actonAddProductToCartRequest = (product) => {
  return (dispatch) => {
    return callApi("productsInCart", "POST", product).then((res) => {
      dispatch(actAddProductToCart(res.data));
    });
  };
};

export const actAddProductToCart = (product) => {
  return {
    type: Types.ADD_PRODUCT_TO_CARD,
    product,
  };
};

/* PUT */
export const actUpdateProductToCartRequest = (product) => {
  return (dispatch) => {
    return callApi(`productsInCart/${product.id}`, "PUT", product).then(
      (res) => {
        dispatch(actUpdateProductToCart(res.data));
      }
    );
  };
};

export const actUpdateProductToCart = (product) => {
  return {
    type: Types.UPDATE_PRODUCT_TO_CART,
    product,
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
