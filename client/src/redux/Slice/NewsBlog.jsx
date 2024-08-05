import { createSlice } from "@reduxjs/toolkit";
import { addNews, deleteNews, fetchById, fetchNew } from "../Reducer/NewsBlog";

const newsNewsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    selectedArticle: null,
    status: 'idle',
    error: null,
    page: 1,
    perPage: 6,  // Número de artículos por página
    totalArticles: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalArticles: (state, action) => {
      state.totalArticles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNew.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNew.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        state.totalArticles = action.payload.length; // Actualizamos el total de artículos
      })
      .addCase(fetchNew.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedArticle = action.payload;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.articles.push(action.payload);
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.articles = state.articles.filter((item) => item.id !== action.payload);
      });
  },
});

export const { setPage, setTotalArticles } = newsNewsSlice.actions;

export default newsNewsSlice.reducer;