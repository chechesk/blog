import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const fetchNew = createAsyncThunk('news/fetchNew', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { page, perPage } = state.new;
  const { data, error } = await supabase
    .from('New')
    .select('*')
    .range((page - 1) * perPage, page * perPage - 1);

  if (error) throw new Error(error.message);
  return data;
});


export const fetchById = createAsyncThunk('news/fetchById', async (id, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase
      .from('New')  // Asegúrate de que el nombre de la tabla sea correcto
      .select()
      .eq('id', id)
      .single();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

  export const addNews = createAsyncThunk('news/addNews', async (newsItem) => {
    const { data, error } = await supabase.from('news').insert([newsItem]).select();
    if (error) throw new Error(error.message);
    return data[0];
  });
  
  export const deleteNews = createAsyncThunk('news/deleteNews', async (id) => {
    const { error } = await supabase.from('news').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return id;
  });