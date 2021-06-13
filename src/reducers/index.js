import { combineReducers } from "redux";
import products from "./products";
import isDisplayModal from "./isDisplayModal";

const appReducer = combineReducers({
  products,
  isDisplayModal,
});

export default appReducer;
