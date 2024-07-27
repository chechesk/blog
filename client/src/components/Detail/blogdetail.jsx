// src/pages/ArticleDetail/ArticleDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../../redux/Slice/NewsSlice';

const ArticleDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.selectedArticle);
  const status = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    dispatch(fetchArticleById(id));
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.date}</p>
      <img src={article.image.url} alt={article.title} className="w-full h-auto mb-4" />
      <p className="mb-4">{article.description}</p>
      <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
    </div>
  );
};

export default ArticleDetail;