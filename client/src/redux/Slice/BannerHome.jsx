import { createSlice } from '@reduxjs/toolkit';
import { fetchBaner } from '../Reducer/BannerHome';

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
      });
  },
});

export default bannerSlice.reducer;