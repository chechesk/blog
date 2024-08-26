import { createSlice } from '@reduxjs/toolkit';
import { fetchAnalyticsData } from '../Reducer/Analytics';

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState: {
      sessions: 0,
      pageviews: 0,
      avgDuration: 0,
      totalUsers: 0,
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAnalyticsData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAnalyticsData.fulfilled, (state, action) => {
          state.loading = false;
          const data = action.payload.rows[0].metrics[0].values;
          state.sessions = data[0];
          state.pageviews = data[1];
          state.avgDuration = data[2];
          state.totalUsers = data[3];
        })
        .addCase(fetchAnalyticsData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default analyticsSlice.reducer;