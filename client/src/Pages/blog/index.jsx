// src/pages/ArticlesList/ArticlesList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, setPage } from '../../redux/Slice/NewsSlice';
import Article from '../../components/Card/card';

const ArticlesList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const articleStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  const page = useSelector((state) => state.articles.page);
  const perPage = useSelector((state) => state.articles.perPage);
  const totalArticles = useSelector((state) => state.articles.totalArticles);

  useEffect(() => {
    dispatch(fetchArticles({ page, perPage }));
  }, [page, perPage, dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalArticles / perPage)) {
      dispatch(setPage(newPage));
    }
  };

  let content;

  if (articleStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (articleStatus === 'succeeded') {
    content = articles.map((article) => (
      <Article
        key={article._id}
        id={article._id}
        imagen={article.image.url}
        titulo={article.title}
        descripcion={article.description}
        autor={article.source}
        fecha={article.date}
      />
    ));
  } else if (articleStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font mx-a">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {content}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="mx-2 px-4 py-2 bg-indigo-500 text-white rounded"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <span className="mx-2 px-4 py-2 text-white">Page {page}</span>
            <button
              className="mx-2 px-4 py-2 bg-indigo-500 text-white rounded"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === Math.ceil(totalArticles / perPage)}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesList;