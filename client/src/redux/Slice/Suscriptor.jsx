import { createSlice } from '@reduxjs/toolkit';
import { deleteSuscriptor, fetchSuscriptor, updateSuscriptor } from '../Reducer/Suscriptor';


const suscriptorSlice = createSlice({
  name: 'suscriptor',
  initialState: {
    suscriptor: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuscriptor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSuscriptor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.suscriptor = action.payload;
      })
      .addCase(fetchSuscriptor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateSuscriptor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateSuscriptor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedSuscriptor = action.payload;
        const existingSuscroptorIndex = state.suscriptor.findIndex(items => items.id === updatedSuscriptor.id);
        if (existingSuscroptorIndex >= 0) {
          state.suscriptor[existingSuscroptorIndex] = updatedSuscriptor;
        }
      })
      .addCase(updateSuscriptor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteSuscriptor.fulfilled, (state, action) => {
        state.loading = false;
        state.suscriptor = state.suscriptor.filter(items => items.id !== action.payload);
      })
  },
});

export default suscriptorSlice.reducer;