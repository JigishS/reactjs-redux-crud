import { combineReducers } from "redux";
import { reducer } from "redux-form";
import blogReducer from "./blogReducer";

export default combineReducers({
  form: reducer,
  blogs: blogReducer,
});
