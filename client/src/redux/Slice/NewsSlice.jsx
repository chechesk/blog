// src/redux/slices/articlesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asynchronous thunk action for fetching articles with pagination
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ page, perPage }) => {
    const response = await axios.get(`http://localhost:3000/news/v1/news?page=${page}&perPage=${perPage}`);
    return response.data;
  }
);

// Asynchronous thunk action for fetching an article by ID
export const fetchArticleById = createAsyncThunk(
  'articles/fetchArticleById',
  async (id) => {
    const response = await axios.get(`http://localhost:3000/news/v1/news/${id}`);
    return response.data;
  }
);

const initialState = {
  articles: [],
  selectedArticle: null,
  status: 'idle',
  error: null,
  page: 1,
  perPage: 9, // Puedes ajustar esto según tus necesidades
  totalArticles: 0,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalArticles = action.payload.totalArticles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedArticle = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = articlesSlice.actions;

export default articlesSlice.reducer;