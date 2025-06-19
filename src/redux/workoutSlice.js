import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todayWorkout: [],
  previousWorkouts: [
    {
      date: "2025-06-14",
      exercises: [
        { name: "Push Ups", reps: 20, weight: 0 },
        { name: "Bench Press", reps: 10, weight: 40 },
      ],
    },
    {
      date: "2025-06-12",
      exercises: [{ name: "Squats", reps: 12, weight: 60 }],
    },
  ],
};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.todayWorkout.push(action.payload);
    },
    setPreviousWorkouts: (state, action) => {
      state.previousWorkouts = action.payload;
    },
    clearTodayWorkout: (state) => {
      state.todayWorkout = [];
    },
  },
});

export const { addExercise, setPreviousWorkouts, clearTodayWorkout } =
  workoutSlice.actions;

export default workoutSlice.reducer;
