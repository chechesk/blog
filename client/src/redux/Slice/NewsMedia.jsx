import { createSlice } from "@reduxjs/toolkit";
import { addMedia, deleteMedia, fetchMedia, updateMedia } from "../Reducer/NewsMedia";

const newsMediaSlice = createSlice({
  name: 'newsmedia',
  initialState: {
    media: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.media = action.payload;
      })
      .addCase(fetchMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })      
      .addCase(updateMedia.fulfilled, (state, action) => {
        state.media = state.media.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(addMedia.fulfilled, (state, action) => {
        state.media.push(action.payload);
      })
      .addCase(deleteMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.media = state.media.filter(media => media.id !== action.payload);
      });
  },
});

export default newsMediaSlice.reducer;