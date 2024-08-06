import { createSlice } from "@reduxjs/toolkit";
import { fetchStrategy } from "../Reducer/NewsStrategy";

const NewStrategySlice = createSlice({
  name: 'strategy',
  initialState: {
    sponsore: {}, // Cambiar a objeto para manejar múltiples categorías
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
        state.sponsore[action.payload.Type] = action.payload.data; // Almacenar datos por tipo
      })
      .addCase(fetchStrategy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default NewStrategySlice.reducer;