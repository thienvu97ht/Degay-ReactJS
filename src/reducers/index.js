import { combineReducers } from "redux";
import isDisplayModal from "./isDisplayModal";

const appReducer = combineReducers({
  isDisplayModal,
});

export default appReducer;
