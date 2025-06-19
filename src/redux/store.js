import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./workoutSlice";
import dateReducer from "./dateSlice";

export const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});
