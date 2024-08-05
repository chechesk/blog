// src/pages/ArticlesList/ArticlesList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../../components/Card/card';
import { fetchNew} from '../../redux/Reducer/NewsBlog';

const ArticlesList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.new.articles);
  const articleStatus = useSelector((state) => state.new.status);
  const error = useSelector((state) => state.new.error);
  const page = useSelector((state) => state.new.page);
  const perPage = useSelector((state) => state.new.perPage);
  const totalArticles = useSelector((state) => state.new.totalArticles);

  useEffect(() => {
    dispatch(fetchNew());
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalArticles / perPage)) {
      dispatch();
    }
  };

  let content;

  if (articleStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (articleStatus === 'succeeded') {
    content = articles
      .slice((page - 1) * perPage, page * perPage)
      .map((article) => (
        <Article
          key={article.id}
          id={article.id}
          imagen={article.Image}
          titulo={article.Content}
          descripcion={article.content}
          autor={article.author}
          fecha={article.Fecha}
        />
      ));
  } else if (articleStatus === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font mx-auto">
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