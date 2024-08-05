import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const fetchBaner = createAsyncThunk('banner/fetchBanner', async (_, thunkAPI) => {
  const { data, error } = await supabase
    .from('BannerHome')
    .select('*');
  if (error) throw new Error(error.message);
  return data;
});