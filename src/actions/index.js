import blogs from "../apis/blogs";
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";
import history from "../history";

export const createBlog = (formValues) => async (dispatch, getState) => {
  const response = await blogs.post("/blogs", { ...formValues });
  dispatch({ type: CREATE_STREAM, payload: response.data });

  history.push("/");
};

export const fetchBlogs = () => async (dispatch) => {
  const response = await blogs.get("/blogs");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchBlog = (id) => async (dispatch) => {
  const response = await blogs.get(`/blogs/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editBlog = (id, formValues) => async (dispatch) => {
  const response = await blogs.patch(`/blogs/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });

  history.push("/");
};

export const deleteBlog = (id) => async (dispatch) => {
  await blogs.delete(`/blogs/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });

  history.push("/");
};
