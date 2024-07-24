import React from 'react';
import { useParams } from 'react-router-dom';
import Notfound from '../404/notfound';

const articles = [
  {
    id: '1',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'The Catalyzer',
    contenido: 'Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
    autor: 'John Doe',
    fecha: '2023-01-01',
  },
  {
    id: '2',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'The 400 Blows',
    contenido: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosingled waistcoat.',
    autor: 'Jane Doe',
    fecha: '2023-02-01',
  },
  {
    id: '3',
    imagen: 'https://dummyimage.com/1204x504',
    titulo: 'Shooting Stars',
    contenido: 'Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee.',
    autor: 'John Smith',
    fecha: '2023-03-01',
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

const BlogDetail = () => {
  const { id, name } = useParams();
  const article = articles.find((article) => article.id === id || article.name === name);

  if (!article) {
    return <div> <Notfound/> </div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{article.titulo}</h1>
      <div className="mb-6">
        <img alt="content" className="object-cover object-center w-full h-96 rounded-lg" src={article.imagen} />
      </div>
      <div className="text-gray-700 text-lg mb-4">
        <p>{article.contenido}</p>
      </div>
      <div className="text-gray-500 text-sm">
        <p>Escrito por: <span className="font-semibold">{article.autor}</span></p>
        <p>Fecha: <span className="font-semibold">{article.fecha}</span></p>
      </div>
    </div>
  );
};

export default BlogDetail;