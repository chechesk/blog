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
  const { data, error } = await supabase.from('Sponsore').update({
    Url: sponsor.Url,
    Image: sponsor.Image,
    Active: sponsor.Active,
    Type: sponsor.type
  }).eq('id', sponsor.id);
  if (error) throw error;
  return data[0];
});

// Delete sponsor
export const deleteSponsore = createAsyncThunk('sponsore/deleteSponsore', async (id, { getState, rejectWithValue }) => {
  const state = getState();
  const sponsor = state.sponsore.sponsore.find(s => s.id === id);

  if (!sponsor) {
    return rejectWithValue('Sponsor not found');
  }

  // Extraer la clave del objeto de la URL de la imagen
  const imageKey = sponsor.Image.split('/').slice(-1).join('/')
  console.log(imageKey);

  // Eliminar la imagen del bucket de Supabase Storage
  const { error: deleteError } = await supabase.storage
  .from('CGS')
  .remove([`public/sponsore/${imageKey}`]);
  
  if (deleteError) {
    return rejectWithValue(deleteError.message);
  }

  // Eliminar el sponsor de la base de datos
  const { data, error } = await supabase
    .from('Sponsore')
    .delete()
    .eq('id', id);
  if (error) {
    return rejectWithValue(error.message);
  }
  return id;
});