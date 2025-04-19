import UserActionTypes from "./actionTypes";

export const logInUser = (payload) => ({
  type: UserActionTypes.LOGIN,
  payload,
});

export const logOutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
