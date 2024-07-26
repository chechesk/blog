// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './Slice/NewsSlice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;