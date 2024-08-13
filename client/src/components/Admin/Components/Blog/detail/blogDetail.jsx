import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const { articles } = useSelector((state) => state.news); // Asegúrate de que el estado se llama 'news'
  const article = articles.find((item) => item.id === parseInt(id, 10));

  if (!article) return <div>Noticia no encontrada.</div>;

  return (
    <div className="p-8 ml-12">
      <h1 className="text-3xl font-bold mb-4">{article.Title}</h1>
      <p className="text-gray-700 mb-4">{article.Content}</p>
      <p className="text-gray-500">{article.Fecha}</p>
      <div className="mt-4">
        {article.Galery && article.Galery.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Galería</h3>
            <div className="flex">
              {article.Galery.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} className="w-1/4 h-auto mr-2" />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6">
        <Link to="/admin/dashboard/blog">
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;