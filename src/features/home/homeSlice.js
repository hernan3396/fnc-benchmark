import api from "../../app/api";
import * as constants from "../../app/constants";

const { createSlice } = require("@reduxjs/toolkit");

const homeSlice = createSlice({
  name: "home",
  initialState: {
    homePosts: [],
    fetchingPosts: false,
    fetchingPostsError: null,
  },
  reducers: {
    fetchPostsStart(state, action) {
      state.fetchingPostsError = null;
      state.fetchingPosts = true;
      state.homePosts = [];
    },
    fetchPostsSuccess(state, action) {
      state.fetchingPosts = false;
      state.fetchingPostsError = null;
      state.homePosts.push(action.payload);
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
} = homeSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());

  constants.brands.map((brand) => {
    api
      .get(
        `act_${brand.id}/insights?level=ad&fields=ad_id,impressions,clicks,spend&access_token=${constants.token}`
      )
      .then(
        (response) => {
          response.data.data.map((ad) => dispatch(fetchPostsSuccess(ad)));
        },
        (error) => dispatch(fetchPostsError(error.response?.data))
      );
  });
};

export default homeSlice.reducer;
