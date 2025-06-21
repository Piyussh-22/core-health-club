import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
  workoutsByDate: {},
  showAddFlow: false,
  step: 1,
  selectedMuscle: null,
  selectedExercise: null,
};

const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    addExercise: (state, action) => {
      const { date, muscle, name, weight, reps } = action.payload;
      const dateKey = format(new Date(date), "yyyy-MM-dd");

      if (!state.workoutsByDate[dateKey]) {
        state.workoutsByDate[dateKey] = [];
      }

      state.workoutsByDate[dateKey].push({
        muscle,
        name,
        weight,
        reps,
      });
    },
    setWorkoutsByDate: (state, action) => {
      state.workoutsByDate = action.payload;
    },
    openAddFlow: (state) => {
      state.showAddFlow = true;
    },
    closeAddFlow: (state) => {
      state.showAddFlow = false;
      state.step = 1;
      state.selectedMuscle = null;
      state.selectedExercise = null;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setSelectedMuscle: (state, action) => {
      state.selectedMuscle = action.payload;
    },
    setSelectedExercise: (state, action) => {
      state.selectedExercise = action.payload;
    },
  },
});

export const {
  addExercise,
  setWorkoutsByDate,
  openAddFlow,
  closeAddFlow,
  setStep,
  setSelectedMuscle,
  setSelectedExercise,
} = workoutSlice.actions;

export default workoutSlice.reducer;
