import React from 'react';
import Article from '../../components/Card/card';

const articles = [
  {
    id: '1',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'The Catalyzer',
    contenido: 'Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
    autor: 'John Doe',
    fecha: '2023-01-01',
    descripcion: 'Breve descripción del artículo 1'
  },
  {
    id: '2',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'The 400 Blows',
    contenido: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosingled waistcoat.',
    autor: 'Jane Doe',
    fecha: '2023-02-01',
    descripcion: 'Breve descripción del artículo 2'
  },
  {
    id: '3',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'Shooting Stars',
    contenido: 'Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee.',
    autor: 'John Smith',
    fecha: '2023-03-01',
    descripcion: 'Breve descripción del artículo 3'
  },
  {
    id: '4',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'Shooting Stars',
    contenido: 'Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee.',
    autor: 'John Smith',
    fecha: '2023-03-01',
  },
  {
    id: '5',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'Shooting Stars',
    contenido: 'Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee.',
    autor: 'John Smith',
    fecha: '2023-03-01',
  },
  {
    id: '6',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'Shooting Stars',
    contenido: 'Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee.',
    autor: 'John Smith',
    fecha: '2023-03-01',
  },
];

const ArticlesList = () => {
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
            {articles.map((article) => (
              <Article
                key={article.id}
                id={article.id}
                imagen={article.imagen}
                titulo={article.titulo}
                descripcion={article.descripcion}
                autor={article.autor}
                fecha={article.fecha}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesList;