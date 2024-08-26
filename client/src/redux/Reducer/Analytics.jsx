import { createAsyncThunk } from '@reduxjs/toolkit';
const PROPERTY = import.meta.env.PROPERTY_ID
const API_KEY = import.meta.env.API_KEY_GOOGLE
import axios from 'axios'

export const fetchAnalyticsData = createAsyncThunk('analytics/fetchAnalyticsData', async () => {
    const response = await axios.post(
      `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`,
      {
        dateRanges: [
          {
            startDate: '30daysAgo',
            endDate: 'today',
          },
        ],
        metrics: [
          { name: 'sessions' },
          { name: 'pageviews' },
          { name: 'averageSessionDuration' },
          { name: 'totalUsers' },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  
    return response.data;
  });
  