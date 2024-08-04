import { createSlice } from "@reduxjs/toolkit";
import { fetchSpeakers } from "../Reducer/NewsSpeakers";

const newsSpeakersSlice = createSlice({
  name: 'newsSpeakers',
  initialState: {
    speakers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpeakers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpeakers.fulfilled, (state, action) => {
        state.loading = false;
        state.speakers = action.payload;
      })
      .addCase(fetchSpeakers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newsSpeakersSlice.reducer;