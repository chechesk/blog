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