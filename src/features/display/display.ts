import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DisplayState {
  value: number;
  clickName: string;
}

const initialState: DisplayState = {
  value: 1,
  clickName: "",
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    display: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    clickDisplay: (state, action: PayloadAction<string>) => {
      state.clickName = action.payload;
    },
  },
});

export const { display, clickDisplay } = displaySlice.actions;

export default displaySlice.reducer;
