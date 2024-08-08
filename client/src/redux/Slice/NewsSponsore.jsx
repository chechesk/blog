import { createSlice } from "@reduxjs/toolkit";
import { deleteSponsore, editSponsore, fetchSponsore } from "../Reducer/NewsSponsore";

const NewSponsoreSlice = createSlice({
  name: 'sponsore',
  initialState: {
    sponsore: {}, // Cambiar a objeto para manejar múltiples categorías
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSponsore.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSponsore.fulfilled, (state, action) => {
        state.loading = false;
        state.sponsore[action.payload.Type] = action.payload.data; // Almacenar datos por tipo
      })
      .addCase(fetchSponsore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editSponsore.fulfilled, (state, action) => {
        const updatedSponsor = action.payload;
        state.sponsore = state.sponsore.map((sponsor) => 
          sponsor.id === updatedSponsor.id ? updatedSponsor : sponsor
        );
      })
      .addCase(deleteSponsore.fulfilled, (state, action) => {
        const id = action.meta.arg;
        state.sponsore = state.sponsore.filter((sponsor) => sponsor.id !== id);
      });
  },
});

export default NewSponsoreSlice.reducer;