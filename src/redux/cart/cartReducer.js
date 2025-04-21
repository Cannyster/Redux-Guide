import CartActionsTypes from "./action-types";

const initialState = {
  products: [],
  TotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
