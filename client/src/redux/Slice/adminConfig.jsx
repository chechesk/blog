// src/redux/Reducer/adminConfigSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchModuleConfig, updateModuleConfig } from '../Reducer/adminConfig';

const initialState = {
    modules: {},
    loading: false,
    error: null,
  };
  
  const adminConfigSlice = createSlice({
    name: 'adminConfig',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchModuleConfig.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchModuleConfig.fulfilled, (state, action) => {
          state.loading = false;
          state.modules = action.payload.reduce((acc, module) => {
            acc[module.module_name] = module.is_active;
            return acc;
          }, {});
        })
        .addCase(fetchModuleConfig.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(updateModuleConfig.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateModuleConfig.fulfilled, (state, action) => {
          state.loading = false;
          const updatedModule = action.payload;
          state.modules[updatedModule.module_name] = updatedModule.is_active;
        })
        .addCase(updateModuleConfig.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default adminConfigSlice.reducer;