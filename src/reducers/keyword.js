import * as Types from "../constants/ActionTypes";

var initialState = "";

var keyword = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEND_KEYWORD:
      state = action.keyword;
      return state;
    case Types.CLEAR_KEYWORD:
      state = "";
      return state;
    default:
      return state;
  }
};

export default keyword;
