import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPost, deletePost, updatePost } from "./thunks";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle", // 'idle' | 'loading' | 'success' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Добавляем обработку action fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        console.log(action);
        state.error = action.error.message;
      });
  },
});

export const postsReducer = postsSlice.reducer;
