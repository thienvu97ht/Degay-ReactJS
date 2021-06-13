import { combineReducers } from "redux";
import products from "./products";
import isDisplayModal from "./isDisplayModal";
import productsInCart from "./productsInCart";

const appReducer = combineReducers({
  products,
  isDisplayModal,
  productsInCart,
});

export default appReducer;
