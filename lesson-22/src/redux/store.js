import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlice";
import { categoriesSlice } from "./slices/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesSlice.reducer,
  },
});
