import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const _createPost = createAsyncThunk("/api/post", async (data) => {
  try {
    const response = await axios.post(
      "https://northwind.vercel.app/api/categories/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {}
});

const postSlice = createSlice({
  name: "postSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(_createPost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(_createPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(_createPost.rejected, (state, action) => {
        state.loading = false;
        state.response.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
