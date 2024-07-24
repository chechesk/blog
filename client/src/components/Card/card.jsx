import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ imagen, titulo, descripcion, id }) => {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={imagen} />
      </div>
      <h2 className="text-xl font-medium title-font text-white mt-5">{titulo}</h2>
      <p className="text-base leading-relaxed mt-2 text-gray-400">{descripcion}</p>
      <Link to={`/blog/${id}`} className="text-indigo-400 inline-flex items-center mt-3">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

export default Article;