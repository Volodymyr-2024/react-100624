import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://pet-shop-backend.slavab.kz";

export const fetchCategories = createAsyncThunk(
  "data/fetchCategories",
  async () => {
    const response = await axios.get(`${API_URL}/categories/all`);
    return response.data;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        if (action.error.code === "ERR_NETWORK_ERROR") {
          state.error = "Network error. Please try again.";
          return;
        }
        state.error = action.error.message;
      });
  },
});
