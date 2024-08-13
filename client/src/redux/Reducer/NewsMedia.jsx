import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const fetchMedia = createAsyncThunk(
    'media/fetchMedia',
    async (_, { rejectWithValue }) => {
      try {
        const { data, error } = await supabase
          .from('Media')
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
  export const addMedia = createAsyncThunk(
    'media/addSponsore',
    async (mediaData, { rejectWithValue }) => {
      try {
        const { data, error } = await supabase
          .from('Media')
          .insert([mediaData]);
  
        if (error) {
          throw error;
        }
  
        return data[0];
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  // Edit sponsor
  export const updateMedia = createAsyncThunk('media/updateMedia', async (updatedData) => {
    const { data, error } = await supabase
      .from('Media')
      .update(updatedData)
      .eq('id', updatedData.id)
      .select();
    if (error) throw error;
    return data[0];
  });

export const deleteMedia = createAsyncThunk('media/deleteMedia', async (id) => {
  const { data, error } = await supabase
    .from('Media')
    .delete()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return id;
});