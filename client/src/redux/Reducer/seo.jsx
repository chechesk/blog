// src/features/seo/seoSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';


export const fetchSeoSettings = createAsyncThunk('seo/fetchSeoSettings', async () => {
  const { data, error } = await supabase
    .from('seo_settings')
    .select('*')
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
});


export const updateSeoSettings = createAsyncThunk('seo/updateSeoSettings', async (seoSettings) => {
  const { data, error } = await supabase
    .from('seo_settings')
    .update({
      title: seoSettings.title,
      description: seoSettings.description,
      keywords: seoSettings.keywords,
    })
    .eq('id', seoSettings.id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
});