import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/home/homeSlice";
import comparativeSlice from "../features/comparative/comparativeSlice";

export default configureStore({
  reducer: { home: homeSlice, comparative: comparativeSlice },
});
