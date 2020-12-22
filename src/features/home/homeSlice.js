import api from "../../app/api";
import * as constants from "../../app/constants";

const { createSlice } = require("@reduxjs/toolkit");

const homeSlice = createSlice({
  name: "home",
  initialState: {
    clickedPost: null,
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
    addClickedPostSuccess(state, action) {
      state.clickedPost = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  addClickedPostSuccess,
} = homeSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());

  constants.brands.map(async (brand) => {
    //fetch creative id and ad id
    const adsResponse = await api.get(
      `act_${brand.id}/ads?fields=creative,id&access_token=${brand.token}`
    );
    const adsCreativeId = adsResponse.data.data;

    //fetch creative and image url
    const creativeResponse = await api.get(
      `act_${brand.id}/adcreatives?fields=thumbnail_url,id,body,effective_object_story_id&thumbnail_height=500&thumbnail_width=500&access_token=${brand.token}`
    );
    const thumbnailId = creativeResponse.data.data;

    //fetch ad data
    const adDataResponse = await api.get(
      `act_${brand.id}/insights?level=ad&fields=ad_id,impressions,clicks,spend,objective,ad_name&access_token=${brand.token}`
    );
    const adData = adDataResponse.data.data;

    /*
    Loops through adData
    uses the id to match in adsCreativeId which contains the creative id
    and finally matches that creative id with an url and pushes a "post" in dispatch(fetchPostsSucces())
    */
    adData.map((ad) => {
      var thumbnail;
      const found = adsCreativeId.find((element) => element.id === ad.ad_id);

      //sometimes facebook deletes the image, this checks it
      if (found) {
        thumbnail = thumbnailId.find(
          (thumbnail) => thumbnail.id === found.creative.id
        );
      }

      if (thumbnail) {
        dispatch(
          fetchPostsSuccess({
            ad_id: ad.ad_id,
            ad_name: ad.ad_name,
            objective: ad.objective,
            clicks: ad.clicks,
            date_start: ad.date_start,
            date_stop: ad.date_stop,
            impressions: ad.impressions,
            spend: ad.impressions,
            thumbnail: thumbnail.thumbnail_url,
            body: thumbnail.body,
            post_link: thumbnail.effective_object_story_id,
          })
        );
      } else {
        dispatch(
          fetchPostsSuccess({
            ad_id: ad.ad_id,
            ad_name: ad.ad_name,
            objective: ad.objective,
            clicks: ad.clicks,
            date_start: ad.date_start,
            date_stop: ad.date_stop,
            impressions: ad.impressions,
            spend: ad.impressions,
          })
        );
      }
    });
  });
};

export default homeSlice.reducer;
