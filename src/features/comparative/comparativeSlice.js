import { createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";
import * as constants from "../../app/constants";

const comparativeSlice = createSlice({
  name: "comparative",
  initialState: {
    posts: ["asd", "pepe"],
    fetchingPosts: false,
    fetchingPostsError: null,
  },
  reducers: {
    fetchPostsStart(state, action) {
      state.fetchingPostsError = null;
      state.fetchingPosts = true;
      state.posts = [];
    },
    fetchPostsSuccess(state, action) {
      state.fetchingPosts = false;
      state.fetchingPostsError = null;
      state.posts.push(action.payload);
    },
    fetchPostsError(state, action) {
      state.fetchingPosts = false;
      state.fetchingPostsError = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
} = comparativeSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsSuccess("Nuevo post"));
};

export default comparativeSlice.reducer;
