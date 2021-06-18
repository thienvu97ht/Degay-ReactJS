import { combineReducers } from "redux";
import products from "./products";
import isDisplayModal from "./isDisplayModal";
import productsInCart from "./productsInCart";
import viewProduct from "./viewProduct";
import quickViewProduct from "./quickViewProduct";
import keyword from "./keyword";

const appReducer = combineReducers({
  viewProduct,
  quickViewProduct,
  isDisplayModal,
  products,
  productsInCart,
  keyword,
});

export default appReducer;
