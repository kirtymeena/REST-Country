import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themify: (state, action) => {
      state.isDark = action.payload;
    },
  },
});
export default themeSlice.reducer;
export const { themify } = themeSlice.actions;
