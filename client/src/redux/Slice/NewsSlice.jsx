// src/redux/Reducer/NewsReducer.jsx
import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles } from '../Reducer/NewsReducer';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exporta el reducer por defecto
export default articlesSlice.reducer;