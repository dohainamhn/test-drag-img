import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import user from "./userReducer";

export default combineReducers({
  user: user,
  auth: authReducer,
});
