import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({ userReducer, cartReducer });

export default rootReducer;
