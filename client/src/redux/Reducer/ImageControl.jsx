import {  createAsyncThunk } from '@reduxjs/toolkit';
import  supabase  from '../supabase'; // Ajusta el import según tu estructura de proyecto

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const { data, error } = await supabase
  .storage
  .from('CGS')
  .list(user?.id + '/',{
    limit: 100,
    offset: 0,
    sortBy: { column: "name", order: "asc"}
  })

  if (error) {
    throw new Error(error.message);
  }

  // Filtrar solo imágenes y mapear las rutas correctas
  return data.map(item => ({
    ...item,
    fullPath: item.object_name,
  }));
});

export const deleteImage = createAsyncThunk('images/deleteImage', async (imageName, { rejectWithValue }) => {
  const { error } = await supabase.storage.from('CGS').remove([imageName]);

  if (error) {
    return rejectWithValue(error.message);
  }

  return imageName;
});