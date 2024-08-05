import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase'; // Asegúrate de importar correctamente

export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({ email, password }, { rejectWithValue }) => {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) return rejectWithValue(error.message);
      return user;
    }
  );
  
  export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({ email, password }, { rejectWithValue }) => {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) return rejectWithValue(error.message);
      return user;
    }
  );
  
  export const signOut = createAsyncThunk('auth/signOut', async () => {
    await supabase.auth.signOut();
  });