import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./features/countriesSlice";
import themeSlice from "./features/themeSlice";

const store = configureStore({
  reducer: {
    themeReducer: themeSlice,
    countryReducer:countrySlice
  },
});

export default store;
