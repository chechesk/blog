// src/redux/Reducer/NewsReducer.jsx
import { createAsyncThunk } from '@reduxjs/toolkit';
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
