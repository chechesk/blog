import { createSlice } from '@reduxjs/toolkit';
import { deletePriceCards, fetchPriceCards, updatePriceCards } from '../Reducer/PriceCards';


const pricecardsSlice = createSlice({
  name: 'pricecards',
  initialState: {
    pricecards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPriceCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPriceCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pricecards = action.payload;
      })
      .addCase(fetchPriceCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updatePriceCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePriceCards.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.pricecards.findIndex(card => card.id === action.payload.id);
        if (index !== -1) {
          state.pricecards[index] = action.payload;
        }
      })
      .addCase(updatePriceCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePriceCards.fulfilled, (state, action) => {
        state.loading = false;
        state.pricecards = state.pricecards.filter(items => items.id !== action.payload);
      })
  },
});

export default pricecardsSlice.reducer;