import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const fetchPriceCards = createAsyncThunk('pricecards/fetchPriceCards', async (_, thunkAPI) => {
  const { data, error } = await supabase
    .from('pricing_cards')
    .select('*');
  if (error) throw new Error(error.message);
  return data;
});

export const updatePriceCards = createAsyncThunk('pricecards/updatePriceCards', async (updatedData) => {
  const { data, error } = await supabase
  .from('pricing_cards')
  .update(updatedData)
  .eq('id', updatedData.id)
  .select();
if (error) throw error;
return data[0];
});

export const deletePriceCards = createAsyncThunk('pricecards/deletePriceCards', async (id) => {
  const { data, error } = await supabase
    .from('pricing_cards')
    .delete()
    .eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return id;
});

export const addPriceCards = createAsyncThunk('pricecards/addPriceCards', async (form) => {
  const { data, error } = await supabase
  .from('pricing_cards')
  .insert([form])
  .select();
  if (error) throw new Error(error.message);
  return data[0];
});