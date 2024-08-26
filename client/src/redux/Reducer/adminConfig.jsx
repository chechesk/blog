import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase';


// Fetch module configuration from Supabase
export const fetchModuleConfig = createAsyncThunk('adminConfig/fetchModuleConfig', async () => {
  const { data, error } = await supabase.from('moduleconfig').select('*');
  if (error) throw error;
  return data;
});

// Update module configuration in Supabase
export const updateModuleConfig = createAsyncThunk('adminConfig/updateModuleConfig', async ({ module_name, is_active }) => {
  const { data, error } = await supabase
    .from('moduleconfig')
    .update({ is_active })
    .eq('module_name', module_name);
  if (error) throw error;
  return data[0];
});
