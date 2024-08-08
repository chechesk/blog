import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const fetchSpeakers = createAsyncThunk(
    'speakers/fetchSpeakers',
    async (_, { rejectWithValue }) => {
      try {
        const { data, error } = await supabase
          .from('Speaker')
          .select();
        
        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const updateSpeakers = createAsyncThunk('speakers/updateSpeakers', async ({ id, updates }) => {
    const { data, error } = await supabase
      .from('Speaker')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) {
      throw new Error(error.message);
    }
    return data[0];
  });
  
  export const deleteSpeakers = createAsyncThunk('speakers/deleteSpeakers', async (id) => {
    const { data, error } = await supabase
      .from('Speaker')
      .delete()
      .eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
    return id;
  });