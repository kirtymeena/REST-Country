import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, getCountryByName } from "../apiCalls/api";

const initialState = {
  country: [],
  ctry: [],
  loading: false,
  region: "",
  error: "",
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    DropdownValue: (state, action) => {
      state.region = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAll.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.error = "";
      state.country = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.error = action.error.message;
      state.country = [];
      state.loading = false;
    });
    //getCountryByName
    builder.addCase(getCountryByName.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCountryByName.fulfilled, (state, action) => {
      state.loading = true;
      state.ctry = action.payload;
      state.error = false;
    });
    builder.addCase(getCountryByName.rejected, (state, action) => {
      state.error = true;
      state.ctry = [];
      state.loading = false;
    });
  },
});

export const { DropdownValue } = countrySlice.actions;
export default countrySlice.reducer;
