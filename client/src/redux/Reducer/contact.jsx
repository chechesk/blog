import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';


export const createContact = createAsyncThunk(
  'contact/createContact',
  async (formData, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from('contact')
      .insert([formData]);
    if (error) {
      return rejectWithValue(error.message);
    }
    return data;
  }
);

export const fetchContact = createAsyncThunk('contact/fetchContact', async (_, thunkAPI) => {
    const { data, error } = await supabase
      .from('contact')
      .select('*');
    if (error) throw new Error(error.message);
    return data;
  });

  export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (id, { rejectWithValue }) => {
      const { data, error } = await supabase
        .from('contact')
        .delete()
        .eq('id', id);
  
      if (error) {
        return rejectWithValue(error.message);
      }
      return id;
    }
  );

  export const updateContact = createAsyncThunk(
    'contact/updateContact',
    async (formData, { rejectWithValue }) => {
      const { id, ...updateData } = formData;
      const { data, error } = await supabase
        .from('contact')
        .update(updateData)
        .eq('id', id);
  
      if (error) {
        return rejectWithValue(error.message);
      }
      return data;
    }
  );