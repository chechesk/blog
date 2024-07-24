import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/404');
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-700 text-lg mb-4">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default Notfound;