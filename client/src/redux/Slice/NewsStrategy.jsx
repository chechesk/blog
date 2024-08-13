import { createSlice } from "@reduxjs/toolkit";
import { addStrategy, deleteStrategy, fetchStrategy, updateStrategy } from "../Reducer/NewsStrategy";

const NewStrategySlice = createSlice({
  name: 'strategy',
  initialState: {
    strategy: [], // Cambiar a objeto para manejar múltiples categorías
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStrategy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStrategy.fulfilled, (state, action) => {
        state.loading = false;
        state.strategy = action.payload;
      })
      .addCase(fetchStrategy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addStrategy.fulfilled, (state, action) => {
        state.strategy.push(action.payload);
      })
      .addCase(updateStrategy.fulfilled, (state, action) => {
        state.strategy = state.strategy.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(deleteStrategy.fulfilled, (state, action) => {
        state.loading = false;
        state.strategy = state.strategy.filter(strategy => strategy.id !== action.payload);
      });
  },
});

export default NewStrategySlice.reducer;