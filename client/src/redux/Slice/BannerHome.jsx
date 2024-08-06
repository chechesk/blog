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
      .addCase(updateBanner.fulfilled, (state, action) => {
        state.banners = state.banners.map((banner) =>
          banner.id === action.payload.id ? action.payload : banner
        );
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        state.banners = state.banners.filter(banner => banner.id !== action.payload);
      });
  },
});

export default bannerSlice.reducer;