// src/features/seo/seoSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';

export const fetchSocialMedia = createAsyncThunk('social/fetchSocialMedia', async () => {
  const { data, error } = await supabase
    .from('social_media')
    .select('*')
    .eq('activo', true);

  if (error) throw error;
  return data;
});

export const addSocialMedia = createAsyncThunk('social/addSocialMedia', async (SocialMedia) => {
  const { data, error } = await supabase
    .from('social_media')
    .insert([SocialMedia]);
  if (error) throw error;
  return data[0];
});

export const updateSocialMedia = createAsyncThunk('social/updateSocialMedia', async (socialMedia) => {
  const { data, error } = await supabase
    .from('social_media')
    .update(socialMedia)
    .eq('id', socialMedia.id);

  if (error) throw error;
  return data[0];
});

export const deleteSocialMedia = createAsyncThunk('social/deleteSocialMedia', async (id) => {
  const { error } = await supabase
    .from('social_media')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return id;
});
