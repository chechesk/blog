import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

  export const fetchStrategy = createAsyncThunk('strategy/fetchStrategy', async (_, thunkAPI) => {
    const { data, error } = await supabase
      .from('Strategy')
      .select('*');
    if (error) throw new Error(error.message);
    return data;
  });


export const fetchStrategyById = createAsyncThunk('strategy/fetchStrategyById', async (id, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase
      .from('Strategy')  // Asegúrate de que el nombre de la tabla sea correcto
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

  export const addStrategy = createAsyncThunk('strategy/addStrategy', async (newsItem) => {
    const { data, error } = await supabase.from('Strategy').insert([newsItem]).select();
    if (error) throw new Error(error.message);
    return data[0];
  });
  
  export const updateStrategy = createAsyncThunk('strategy/updateStrategy', async (updatedData) => {
    const { data, error } = await supabase
      .from('Strategy')
      .update(updatedData)
      .eq('id', updatedData.id)
      .select();
    if (error) throw error;
    return data[0];
  });

  export const deleteStrategy = createAsyncThunk('strategy/deleteStrategy', async (id) => {
    const { error } = await supabase.from('Strategy').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return id;
  });