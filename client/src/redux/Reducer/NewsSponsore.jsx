// src/redux/Reducer/NewsSponsore.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

// Asynchronous thunk action for fetching sponsors with type filtering
export const fetchSponsore = createAsyncThunk(
  'sponsore/fetchSponsore',
  async (Type, { rejectWithValue }) => {
    try {
      let query = supabase
        .from('Sponsore')
        .select(`
          id,
          created_at,
          Image,
          Url,
          Active,
          Type_Sponsore (
            Name
          )
        `);

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

export const fetchTypes = createAsyncThunk(
  'sponsore/fetchTypes',
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('Type_Sponsore')
        .select('id, Name');

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addSponsore = createAsyncThunk(
  'sponsore/addSponsore',
  async (sponsoreData, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('Sponsore')
        .insert([sponsoreData]);

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
export const editSponsore = createAsyncThunk('sponsore/editSponsore', async (sponsor) => {
  const { data, error } = await supabase.from('Sponsore').update(sponsor).eq('id', sponsor.id);
  if (error) throw error;
  return data[0];
});

// Delete sponsor
export const deleteSponsore = createAsyncThunk('sponsore/deleteSponsore', async (id) => {
  const { data, error } = await supabase
    .from('Sponsore')
    .delete()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return id;
});