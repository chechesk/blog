import { createSlice } from "@reduxjs/toolkit";
import { fetchMedia } from "../Reducer/NewsMedia";

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
      });
  },
});

export default newsMediaSlice.reducer;