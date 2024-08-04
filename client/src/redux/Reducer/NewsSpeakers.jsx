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