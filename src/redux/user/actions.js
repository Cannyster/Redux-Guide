<<<<<<< HEAD
import UserActionTypes from "./actionTypes";

export const logInUser = (payload) => ({
=======
import UserActionTypes from "./action-types";

export const loginUser = (payload) => ({
>>>>>>> c8df265bba97759761fbeb2d33cbe8012a166f00
  type: UserActionTypes.LOGIN,
  payload,
});

<<<<<<< HEAD
export const logOutUser = () => ({
=======
export const logoutUser = () => ({
>>>>>>> c8df265bba97759761fbeb2d33cbe8012a166f00
  type: UserActionTypes.LOGOUT,
});
