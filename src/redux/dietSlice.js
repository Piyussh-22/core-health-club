import { createSlice } from "@reduxjs/toolkit";

const dietSlice = createSlice({
  name: "diet",
  initialState: {
    selectedDiet: null,
  },
  reducers: {
    setDiet: (state, action) => {
      state.selectedDiet = action.payload;
    },
  },
});
export const { setDiet } = dietSlice.actions;
export default dietSlice.reducer;
