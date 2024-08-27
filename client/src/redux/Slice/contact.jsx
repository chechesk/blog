import { createSlice } from '@reduxjs/toolkit';
import { createContact, deleteContact, fetchContact, updateContact } from '../Reducer/contact';

const constactsSlice = createSlice({
  name: 'contact',
  initialState: {
    contact: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contact = action.payload;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.contact.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.contact[index] = action.payload;
        }
      })
      .addCase(createContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createContact.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(createContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = state.contact.filter(form => form.id !== action.payload);
      })
  },
});

export default constactsSlice.reducer;