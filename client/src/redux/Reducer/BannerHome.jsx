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
  const { data, error } = await supabase
    .from('BannerHome')
    .update(updates)
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  if (!data || data.length === 0) {
    throw new Error('No data returned from the update operation');
  }

  return data[0];
});

export const deleteBanner = createAsyncThunk('banner/deleteBanner', async (id) => {
  const { error } = await supabase
    .from('BannerHome')
    .delete()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return id;
});