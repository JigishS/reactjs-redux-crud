import { combineReducers } from "redux";
import { reducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  form: reducer,
  streams: streamReducer,
});
