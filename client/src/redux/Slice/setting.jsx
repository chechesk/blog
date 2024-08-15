import { createSlice } from "@reduxjs/toolkit";
import { fetchSettings, updateSettings } from "../Reducer/setting";


const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
      gtm_id: null,
      ga_id: null,
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSettings.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchSettings.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.gtm_id = action.payload.gtm_id;
          state.ga_id = action.payload.ga_id;
        })
        .addCase(fetchSettings.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(updateSettings.fulfilled, (state, action) => {
            state.gtm_id = action.payload.gtm_id;
            state.ga_id = action.payload.ga_id;
        });
    },
  });
  
  export default settingsSlice.reducer;