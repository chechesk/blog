import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchById } from '../../redux/Reducer/NewsBlog';

const ArticleDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.new.selectedArticle); // Asegúrate de que el nombre del estado coincida
  const status = useSelector((state) => state.new.status);
  const error = useSelector((state) => state.new.error);

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  if (!article) {
    return <p>No article found</p>;
  }

  return (
    <div className="flex flex-col items-center container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{article.Title}</h1>
      <p className="text-gray-600 mb-4">Fecha: {article.Fecha.slice(0, 10)}  Hora: {article.Fecha.slice(11, 16)}</p>
      <img src={article.Image} alt={article.Title} className="w-full h-auto mb-4 mx-auto max-w-xl" />
      <p className="mb-4">{article.Content}</p>
      <div className='text-justify my-2' dangerouslySetInnerHTML={{ __html: article.Content }}></div>
    </div>
  );
};

export default ArticleDetail;