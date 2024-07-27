// src/components/Card/card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ id, imagen, titulo, descripcion, autor, fecha }) => {
  return (
    <div className="p-4 md:w-1/3">
      <Link to={"/blog/"+id }>
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imagen} alt={titulo} />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{autor}</h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">{titulo}</h1>
          <p className="leading-relaxed mb-3">{descripcion}</p>
          <div className="flex items-center flex-wrap">
            <span className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">
              {new Date(fecha).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Article;