import CartActionsTypes from "./action-types";

export const addProductToCart = (payload) => ({
  type: CartActionsTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionsTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductFromCart = (payload) => ({
  type: CartActionsTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreaseProductFromCart = (payload) => ({
  type: CartActionsTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
