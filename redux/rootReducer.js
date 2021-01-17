import { combineReducers } from "redux";
import usersReducer from "./usersSlice";
import recoReducer from "./recoSlice";

export default combineReducers({
  usersReducer,
  recoReducer,
});