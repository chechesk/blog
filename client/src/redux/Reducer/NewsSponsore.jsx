// src/redux/Reducer/NewsReducer.jsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

// Asynchronous thunk action for fetching articles with pagination
export const fetchSponsore = createAsyncThunk(
  'sponsore/fetchSponsore',
  async (Type, { rejectWithValue }) => {
    try {
      let query = supabase.from('Sponsore').select();

      if (Type) {
        query = query.eq('Type', Type);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }
      return { data, Type };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Edit sponsor
export const editSponsore = createAsyncThunk('sponsore/editSponsore', async (sponsor) => {
  const { data, error } = await supabase.from('sponsore').update(sponsor).eq('id', sponsor.id);
  if (error) throw error;
  return data;
});

// Delete sponsor
export const deleteSponsore = createAsyncThunk('sponsore/deleteSponsore', async (id) => {
  const { data, error } = await supabase.from('sponsore').delete().eq('id', id);
  if (error) throw error;
  return data;
});
