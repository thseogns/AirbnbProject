import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DisplayState {
  value: number;
}

const initialState: DisplayState = {
  value: 1,
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    display: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { display } = displaySlice.actions;

export default displaySlice.reducer;
