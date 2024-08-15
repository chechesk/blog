import { createSlice } from "@reduxjs/toolkit";
import { fetchSeoSettings, updateSeoSettings } from "../Reducer/seo";


const seoSlice = createSlice({
  name: 'seo',
  initialState: {
    id: '',
    created_at: '',
    title: '',
    description: '',
    keywords: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeoSettings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeoSettings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload?.id || '';
        state.created_at = action.payload?.created_at || '';
        state.title = action.payload?.title || '';
        state.description = action.payload?.description || '';
        state.keywords = action.payload?.keywords || [];
      })
      .addCase(fetchSeoSettings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateSeoSettings.fulfilled, (state, action) => {
        state.title = action.payload?.title || '';
        state.description = action.payload?.description || '';
        state.keywords = action.payload?.keywords || [];
      });
  },
});

export default seoSlice.reducer;