import { combineReducers } from "redux";
import products from "./products";
import isDisplayModal from "./isDisplayModal";
import productsInCart from "./productsInCart";
import viewProduct from "./viewProduct";
import quickViewProduct from "./quickViewProduct";

const appReducer = combineReducers({
  viewProduct,
  quickViewProduct,
  isDisplayModal,
  products,
  productsInCart,
});

export default appReducer;
