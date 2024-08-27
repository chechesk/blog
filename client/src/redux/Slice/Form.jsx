import { createSlice } from '@reduxjs/toolkit';
import { createForm, deleteForm, fetchForm, updateForm } from '../Reducer/Form';


const formsSlice = createSlice({
  name: 'forms',
  initialState: {
    forms: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.forms = action.payload;
      })
      .addCase(fetchForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedForm = action.payload;
        const existingFormIndex = state.forms.findIndex(item => item.id === updatedForm.id);
        if (existingFormIndex >= 0) {
          state.forms[existingBannerIndex] = updatedForm;
        }
      })
      .addCase(createForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.forms.push(action.payload[0]);
      })
      .addCase(createForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteForm.fulfilled, (state, action) => {
        state.loading = false;
        state.forms = state.forms.filter(form => form.id !== action.payload);
      })
  },
});

export default formsSlice.reducer;