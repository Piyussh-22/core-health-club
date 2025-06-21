import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "./workoutSlice";
import dateReducer from "./dateSlice";
import dietReducer from "./dietSlice";

export const store = configureStore({
  reducer: {
    date: dateReducer,
    workout: workoutReducer,
    diet: dietReducer,
  },
});
