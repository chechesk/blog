import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';


export const createForm = createAsyncThunk(
  'form/createForm',
  async (formData, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from('registrations')
      .insert([formData]);

    if (error) {
      return rejectWithValue(error.message);
    }
    return data;
  }
);

export const fetchForm = createAsyncThunk('form/fetchForm', async (_, thunkAPI) => {
    const { data, error } = await supabase
      .from('registrations')
      .select('*');
    if (error) throw new Error(error.message);
    return data;
  });

  export const deleteForm = createAsyncThunk(
    'form/deleteForm',
    async (id, { rejectWithValue }) => {
      const { data, error } = await supabase
        .from('registrations')
        .delete()
        .eq('id', id);
  
      if (error) {
        return rejectWithValue(error.message);
      }
      return id;
    }
  );

  export const updateForm = createAsyncThunk(
    'form/updateForm',
    async (formData, { rejectWithValue }) => {
      const { id, ...updateData } = formData;
      const { data, error } = await supabase
        .from('registrations')
        .update(updateData)
        .eq('id', id);
  
      if (error) {
        return rejectWithValue(error.message);
      }
      return data;
    }
  );