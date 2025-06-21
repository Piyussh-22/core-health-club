import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    selectedDate: new Date().toISOString(),
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = dateSlice.actions;
export default dateSlice.reducer;

/*Notes

Store
The central brain. Holds all app state.

Slice
A piece of the store. Like a folder for selectedDate.

Action
A message you send to update the store (setDate()).

Reducer
A function that updates state based on the action.

useSelector
Hook to read data from Redux store.

useDispatch
Hook to send an action to Redux store.
*/
