import * as Types from "../constants/ActionTypes";

var initialState = {};

var quickViewProduct = (state = initialState, action) => {
    switch (action.type) {
        case Types.QUICK_VIEW_PRODUCT:
            state = action.product;
            // console.log(state)
            return action.product;

        default:
            return state;
    }
};

export default quickViewProduct;
