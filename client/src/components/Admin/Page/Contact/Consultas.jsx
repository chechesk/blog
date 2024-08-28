// src/components/Consultas.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';
import { utils, writeFile } from 'xlsx';
import EditFormModal from './editForm';
import DeleteConfirmationModal from './deleteForm';
import { fetchContact } from '../../../../redux/Reducer/contact';


export default function Consultas() {
  const dispatch = useDispatch();
  const { contact, status, error } = useSelector((state) => state.contact);
  const [editForm, setEditForm] = useState(null);
  const [deleteFormId, setDeleteFormId] = useState(null);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const exportToExcel = () => {
    const ws = utils.json_to_sheet(contact);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Registros');
    const date = new Date();
    const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    writeFile(wb, `registros_${dateString}.xlsx`);
  };

  const csvHeaders = [
    { label: 'Name', key: 'Name' },
    { label: 'Email', key: 'Email' },
    { label: 'Phone', key: 'Phone' },
    { label: 'Subject', key: 'Subject' },
    { label: 'Message', key: 'Message' },
  ];

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className='p-8 ml-12'>
      <h1>Solicitudes de Consultas</h1>
      <section>
        <div className="overflow-x-auto">
          <div className="mb-4">
            <CSVLink
              data={Array.isArray(contact) ? contact : []}
              headers={csvHeaders}
              filename={`consultas_${new Date().toISOString().slice(0, 10)}.csv`}
              className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700 mr-2"
            >
              Exportar a CSV
            </CSVLink>
            <button
              onClick={exportToExcel}
              className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
            >
              Exportar a Excel
            </button>
          </div>
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Phone</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Subject</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Message</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {Array.isArray(contact) && contact.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.Name}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Email}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Phone}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Subject}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Message}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {/* <button
                      onClick={() => setEditForm(item)}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                    >
                      Editar
                    </button> */}
                    <button
                      onClick={() => setDeleteFormId(item.id)}
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {editForm && (
        <EditFormModal
          form={editForm}
          onClose={() => setEditForm(null)}
        />
      )}

      {deleteFormId && (
        <DeleteConfirmationModal
          formId={deleteFormId}
          onClose={() => setDeleteFormId(null)}
        />
      )}
    </div>
  );
}