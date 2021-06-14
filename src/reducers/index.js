import { combineReducers } from "redux";
import products from "./products";
import isDisplayModal from "./isDisplayModal";
import productsInCart from "./productsInCart";
import viewProduct from "./viewProduct";

const appReducer = combineReducers({
  viewProduct,
  isDisplayModal,
  products,
  productsInCart,
});

export default appReducer;
