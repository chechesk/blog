import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut, signUp } from '../Reducer/Auth';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(signIn.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signIn.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload;
        })
        .addCase(signIn.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(signUp.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signUp.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload;
        })
        .addCase(signUp.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(signOut.fulfilled, (state) => {
          state.user = null;
        });
    },
  });
  
  export default authSlice.reducer;