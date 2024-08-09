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

  // Edit sponsor
export const updateMedia = createAsyncThunk('media/editMedia', async (sponsor) => {
  const { data, error } = await supabase.from('Media').update(sponsor).eq('id', sponsor.id);
  if (error) throw error;
  return data;
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