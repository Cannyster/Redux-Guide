import CartActionsTypes from "./action-types";

export const addProductToCart = (payload) => ({
  type: CartActionsTypes.ADD_PRODUCT,
  payload,
});
