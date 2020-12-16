import { createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";
import * as constants from "../../app/constants";

const comparativeSlice = createSlice({
  name: "comparative",
  initialState: {
    posts: [],
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
  addPostSuccess,
} = comparativeSlice.actions;

export const fetchPost = () => async (dispatch) => {
  dispatch(fetchPostsSuccess());
};

export default comparativeSlice.reducer;
