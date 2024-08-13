import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMedia } from '../../redux/Reducer/NewsMedia';

const MediaList = ({ columns }) => {
  const dispatch = useDispatch();
  const media = useSelector(state => state.media.media); // Obtener datos por tipo
  const loading = useSelector(state => state.media.loading);
  const error = useSelector(state => state.media.error);

  useEffect(() => {
    dispatch(fetchMedia());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const gridClasses = `grid gap-4 mb-4 ${columns ? `grid-cols-${columns}` : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '}`;

  // Filtrar oradores activos
  const activeMedia = media.filter(media => media.Active);


  return (
    <div className={gridClasses} >
      {activeMedia && activeMedia.map(item => (
        <div key={item.id} className="flex flex-col items-center justify-center rounded-lg border-slate-500	border-2 ">
          <a href={item.Url} target="_blank" rel="noopener noreferrer">
            <img src={item.Image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-gPOCLe1jEzEVF82ZsCTqWvhVC87_i5UjQ&s'} alt='Patrocinio' className="max-w-full h-auto " />
          </a>
        </div>
      ))}
    </div>
  );
};

export default MediaList;