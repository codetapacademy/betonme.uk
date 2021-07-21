import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    user: userReducer,
    ...asyncReducers,
  });
//Root reducer
//Here we can have many reducers and we can combine them and pass it to the store

export default createReducer;
