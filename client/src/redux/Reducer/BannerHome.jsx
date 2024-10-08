import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const fetchBaner = createAsyncThunk('banner/fetchBanner', async (_, thunkAPI) => {
  const { data, error } = await supabase
    .from('BannerHome')
    .select('*');
  if (error) throw new Error(error.message);
  return data;
});

export const updateBanner = createAsyncThunk('banner/updateBanner', async ({ id, updates }) => {
  console.log('Updating Banner:', { id, updates }); // Añadir log para verificar el contenido

  const { data, error } = await supabase
    .from('BannerHome')
    .update(updates)
    .eq('id', id)
    .select();
    
  if (error) {
    throw new Error(error.message);
  }
  return data[0];
});

export const deleteBanner = createAsyncThunk('banner/deleteBanner', async (id) => {
  const { data, error } = await supabase
    .from('BannerHome')
    .delete()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return id;
});

export const addBanner = createAsyncThunk('banner/addBanner', async (form) => {
  const { data, error } = await supabase.from('BannerHome').insert([form]).select();
  if (error) throw new Error(error.message);
  return data[0];
});