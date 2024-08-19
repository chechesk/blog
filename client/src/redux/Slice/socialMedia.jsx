import { createSlice } from "@reduxjs/toolkit";
import { addSocialMedia, deleteSocialMedia, fetchSocialMedia, updateSocialMedia } from "../Reducer/socialMedia";

const socialMediaSlice = createSlice({
  name: 'socialMedia',
  initialState: {
    socialMedia: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialMedia.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSocialMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.socialMedia = action.payload;
      })
      .addCase(fetchSocialMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addSocialMedia.fulfilled, (state, action) => {
        state.socialMedia.push(action.payload);
      })
      .addCase(updateSocialMedia.fulfilled, (state, action) => {
        const index = state.socialMedia.findIndex(social => social.id === action.payload.id);
        if (index !== -1) {
          state.socialMedia[index] = action.payload;
        }
      })
      .addCase(deleteSocialMedia.fulfilled, (state, action) => {
        state.socialMedia = state.socialMedia.filter(social => social.id !== action.payload);
      });
  }
});

export default socialMediaSlice.reducer;