// src/pages/ArticlesList/ArticlesList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../../components/Card/card';
import { fetchNew} from '../../redux/Reducer/NewsBlog';
import { Button } from 'flowbite-react';

const BlogCard = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.new.articles);
  const articleStatus = useSelector((state) => state.new.status);
  const error = useSelector((state) => state.new.error);

  useEffect(() => {
    dispatch(fetchNew());
  }, [dispatch]);

  let content;

  if (articleStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (articleStatus === 'succeeded') {
    content = articles
      .slice(0,3)
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
          <div className="flex flex-col-2">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
              Últimas noticias
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Convidamos você a visitar nosso blog e conferir as últimas notícias que selecionamos.

              </p>
         
            </div>
            <div className=" ">   <a href="/blog">
            <Button>
                Blog
            </Button>
            </a></div>
            
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;