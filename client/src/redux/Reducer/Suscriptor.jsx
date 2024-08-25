import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const fetchSuscriptor = createAsyncThunk('suscriptor/fetchSuscriptor', async (_, thunkAPI) => {
  const { data, error } = await supabase
    .from('suscriptor')
    .select('*');
  if (error) throw new Error(error.message);
  return data;
});

export const updateSuscriptor = createAsyncThunk('suscriptor/updateSuscriptor', async ({ id, updates }) => {
  console.log('Updating Banner:', { id, updates }); // Añadir log para verificar el contenido

  const { data, error } = await supabase
    .from('suscriptor')
    .update(updates)
    .eq('id', id)
    .select();
    
  if (error) {
    throw new Error(error.message);
  }
  return data[0];
});

export const deleteSuscriptor = createAsyncThunk('suscriptor/deleteSuscriptor', async (id) => {
  const { data, error } = await supabase
    .from('suscriptor')
    .delete()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return id;
});

export const addSuscriptor = createAsyncThunk('suscriptor/addSuscriptor', async (form) => {
  const { data, error } = await supabase
  .from('suscriptor')
  .insert([form])
  .select();
  if (error) throw new Error(error.message);
  return data[0];
});