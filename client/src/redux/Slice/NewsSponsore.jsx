// src/redux/Reducer/NewSponsoreSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { addSponsore, deleteSponsore, editSponsore, fetchSponsore, fetchTypes } from "../Reducer/NewsSponsore";


const NewSponsoreSlice = createSlice({
  name: 'sponsore',
  initialState: {
    sponsore: [], // Almacenar datos como un array
    types: [], // Añadir un estado para los tipos
    typesLoading: false,
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
        // Filtrar los patrocinadores que no son del tipo actual y añadir los nuevos
        const filteredSponsors = state.sponsore.filter(sponsor => sponsor.Type !== action.payload.Type);
        state.sponsore = [...filteredSponsors, ...action.payload.data.map(sponsor => ({ ...sponsor, Type: action.payload.Type }))];
      })
      .addCase(fetchSponsore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTypes.pending, (state) => {
        state.typesLoading = true;
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.typesLoading = false;
        state.types = action.payload;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.typesLoading = false;
        state.error = action.payload;
      })
      .addCase(editSponsore.fulfilled, (state, action) => {
        const updatedSponsor = action.payload;
        const index = state.sponsore.findIndex(sponsor => sponsor.id === updatedSponsor.id);
        if (index !== -1) {
          state.sponsore[index] = updatedSponsor;
        }
      })
      .addCase(addSponsore.fulfilled, (state, action) => {
        state.sponsore.push(action.payload);
      })
      .addCase(deleteSponsore.fulfilled, (state, action) => {
        state.sponsore = state.sponsore.filter(sponsor => sponsor.id !== action.payload);
      });
  },
});

export default NewSponsoreSlice.reducer;