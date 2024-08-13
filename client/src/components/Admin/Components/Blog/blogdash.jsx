import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNew } from '../../../../redux/Reducer/NewsBlog';
import { useNavigate } from 'react-router-dom';


export default function BlogDash() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { articles, loading, error } = useSelector((state) => state.new);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchContent, setSearchContent] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchActive, setSearchActive] = useState('');
  
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    dispatch(fetchNew());
  }, [dispatch]);

  const handleClearSearch = () => {
    setSearchTitle('');
    setSearchContent('');
    setSearchDate('');
    setSearchActive('');
  };

  // Filtrar los artículos
  const filteredArticles = articles.filter((article) => {
    return (
      (searchTitle === '' || article.Title.toLowerCase().includes(searchTitle.toLowerCase())) &&
      (searchContent === '' || article.Content.toLowerCase().includes(searchContent.toLowerCase())) &&
      (searchDate === '' || article.Fecha.includes(searchDate)) &&
      (searchActive === '' || (searchActive === 'true' ? article.Active : !article.Active))
    );
  });

  // Paginación
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleView = (id) => {
    navigate(`/admin/dashboard/blog/${id}`);
  };

  return (
    <div className="p-8 ml-12">
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <h1 className="text-2xl font-bold mb-4">Blog Manager</h1>
      <a href="/admin/dashboard/blog/add">
        <button
          type="button"
          className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Add New
        </button>
      </a>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Buscar por Titulo"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Buscar por Contenido"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <input
          type="date"
          placeholder="Buscar por Fecha"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <select
          value={searchActive}
          onChange={(e) => setSearchActive(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">Todos</option>
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </select>
        <button
          onClick={handleClearSearch}
          className="ml-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Limpiar
        </button>
      </div>
      <section>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Titulo</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Contenido</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Activo</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Galería</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentArticles.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.id}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Title}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Content}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Fecha}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Active ? 'Sí' : 'No'}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Galery && item.Galery.length > 0 ? 'Sí' : 'No'}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => handleView(item.id)}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={filteredArticles.length}
          paginate={paginate}
        />
      </section>
    </div>
  );
}

function Pagination({ articlesPerPage, totalArticles, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="pagination flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="page-link px-3 py-2 border rounded hover:bg-gray-200"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}