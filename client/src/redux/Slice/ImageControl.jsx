import {  createSlice } from '@reduxjs/toolkit';
import { deleteImage, fetchImages } from '../Reducer/ImageControl';

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.images = action.payload;
        state.loading = false;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.images = state.images.filter(image => image.fullPath !== action.payload);
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default imagesSlice.reducer;