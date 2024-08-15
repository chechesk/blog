// src/components/SEO.js
import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeoSettings } from '../../redux/Reducer/seo';


const SEO = () => {
  const dispatch = useDispatch();
  const { title, description, keywords, status, error } = useSelector((state) => state.seo);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSeoSettings());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return null; // or a loading spinner
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;