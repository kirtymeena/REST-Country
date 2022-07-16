import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAll = createAsyncThunk("all/fetch", () => {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);
});

export const getCountryByName = createAsyncThunk("name/fetch", (name) => {
  return axios
    .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    .then((response) => response.data);
});
