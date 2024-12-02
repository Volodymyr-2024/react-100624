// CRUD thunk функции для постов
// CRUD - Create, Read, Update, Delete
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(ENDPOINT);
  return response.data;
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const response = await axios.post(ENDPOINT, post);
  return response.data;
});

export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  const response = await axios.patch(`${ENDPOINT}/${post.id}`, post);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const response = await axios.delete(`${ENDPOINT}/${id}`);
  return response.data;
});
