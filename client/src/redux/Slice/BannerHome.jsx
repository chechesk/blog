import { createSlice } from '@reduxjs/toolkit';
import { deleteBanner, fetchBaner, updateBanner } from '../Reducer/BannerHome';

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    banners: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBaner.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBaner.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.banners = action.payload;
      })
      .addCase(fetchBaner.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateBanner.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBanner.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedBanner = action.payload;
        const existingBannerIndex = state.banners.findIndex(banner => banner.id === updatedBanner.id);
        if (existingBannerIndex >= 0) {
          state.banners[existingBannerIndex] = updatedBanner;
        }
      })
      .addCase(updateBanner.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.banners = state.banners.filter(banner => banner.id !== action.payload);
      });
  },
});

export default bannerSlice.reducer;