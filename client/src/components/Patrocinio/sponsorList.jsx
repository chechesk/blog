import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSponsore } from '../../redux/Reducer/NewsSponsore'; // Corrige la importación si es necesario

const SponsoreList = ({ type, columns }) => {
  const dispatch = useDispatch();
  const sponsore = useSelector(state => state.sponsore.sponsore[type]); // Obtener datos por tipo
  const loading = useSelector(state => state.sponsore.loading);
  const error = useSelector(state => state.sponsore.error);

  useEffect(() => {
    dispatch(fetchSponsore(type));
  }, [dispatch, type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const gridClasses = `grid gap-4 ${columns ? `grid-cols-${columns}` : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`;

  return (
    <div className={gridClasses} >
      {sponsore && sponsore.map(item => (
        <div key={item.id} className="flex flex-col items-center justify-center rounded-lg border-slate-500	border-2 ">
          <a href={item.Url} target="_blank" rel="noopener noreferrer">
            <img src={item.Image} alt='Patrocinio' className="max-w-full h-auto " />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SponsoreList;