import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuscriptor } from '../../../../redux/Reducer/Suscriptor';

const ITEMS_PER_PAGE = 5;

export default function Suscriptores() {
  const dispatch = useDispatch();
  const { suscriptor, loading, error } = useSelector((state) => state.suscriptor);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchSuscriptor());
  }, [dispatch]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(suscriptor.length / ITEMS_PER_PAGE)));
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = suscriptor.slice(startIndex, endIndex);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">id</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">correo</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha de Registro</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((items) => (
              <tr key={items.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{items.id}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{items.email}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{items.created_at.slice(0, 10)}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href={`mailto:${items.email}`}
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    Contactar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="inline-block rounded bg-gray-300 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm font-medium text-gray-700">
          Page {currentPage} of {Math.ceil(suscriptor.length / ITEMS_PER_PAGE)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(suscriptor.length / ITEMS_PER_PAGE)}
          className="inline-block rounded bg-gray-300 px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}