import { createSlice } from '@reduxjs/toolkit';
import { addSpeaker, deleteSpeakers, fetchSpeakers, updateSpeakers } from '../Reducer/NewsSpeakers';

const speakersSlice = createSlice({
  name: 'speakers',
  initialState: {
    speakers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(addSpeaker.pending, (state) => {
      state.loading = true;
    })
    .addCase(addSpeaker.fulfilled, (state, action) => {
      state.loading = false;
      state.speakers.push(action.payload);
    })
    .addCase(addSpeaker.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
      .addCase(fetchSpeakers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSpeakers.fulfilled, (state, action) => {
        state.loading = false;
        state.speakers = action.payload;
      })
      .addCase(fetchSpeakers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateSpeakers.fulfilled, (state, action) => {
        state.speakers = state.speakers.map((speaker) =>
          speaker.id === action.payload.id ? action.payload : speaker
        );
      })
      .addCase(deleteSpeakers.fulfilled, (state, action) => {
        state.loading = false;
        state.speakers = state.speakers.filter(speaker => speaker.id !== action.payload);
      });
  },
});

export default speakersSlice.reducer;