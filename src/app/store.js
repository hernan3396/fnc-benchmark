import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/home/homeSlice";

export default configureStore({
  reducer: { home: homeSlice },
});
