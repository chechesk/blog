import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';


export const fetchSettings = createAsyncThunk('settings/fetchSettings', async () => {
  const { data, error } = await supabase
    .from('settings')
    .select('*')
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
});

export const updateSettings = createAsyncThunk('settings/updateSettings', async (settings) => {
    const { data, error } = await supabase
      .from('settings')
      .update(settings)
      .eq('id', settings.id);
  
    if (error) {
      throw new Error(error.message);
    }
    return data;
  });