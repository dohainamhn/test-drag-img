import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import user from "./userReducer";
import candidate from "./candidateReucer";

export default combineReducers({
  user: user,
  auth: authReducer,
  candidate,
});
