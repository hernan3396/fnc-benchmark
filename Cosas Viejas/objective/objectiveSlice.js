import { createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";

const objectiveSlice = createSlice({
  name: "objective",
  initialState: {
    post1: {},
    post2: {},
  },
});

export default objectiveSlice.reducer;
