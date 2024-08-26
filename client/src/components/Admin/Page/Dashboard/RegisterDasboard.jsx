// src/components/RegisterDashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyticsData } from '../../../../redux/Reducer/analyticsSlice';

const RegisterDashboard = () => {
  const dispatch = useDispatch();
  const { sessions, pageviews, avgDuration, totalUsers, loading, error } = useSelector((state) => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalyticsData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Last 30 Days Insights for: Your Website</h1>
      <div>Sessions: {sessions}</div>
      <div>Pageviews: {pageviews}</div>
      <div>Avg. Duration: {avgDuration}s</div>
      <div>Total Users: {totalUsers}</div>
      <div>More data is available</div>
    </div>
  );
};

export default RegisterDashboard;