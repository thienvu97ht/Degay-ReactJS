import * as Types from "../constants/ActionTypes";

var initialState = {
  perPage: 6,
  currentPage: 1,
  start: 0,
};

var paging = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEND_VALUE_PAGING:
      state = action.pagingValue;
      return state;
    case Types.SEND_CURRENTPAGE:
      state.currentPage = action.current;
      state.start = (action.current - 1) * state.perPage;
      return state;
    default:
      return state;
  }
};

export default paging;
