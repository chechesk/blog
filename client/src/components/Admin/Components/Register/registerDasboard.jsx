import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditFormModal from './editForm';
import DeleteConfirmationModal from './deleteForm';
import { fetchForm } from '../../../../redux/Reducer/Form';

export default function RegisterDashboard() {
  const dispatch = useDispatch();
  const { forms, loading, error } = useSelector((state) => state.forms);
  const [editForm, setEditForm] = useState(null);
  const [deleteFormId, setDeleteFormId] = useState(null);

  useEffect(() => {
    dispatch(fetchForm());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='p-8 ml-12'>
      <h1>Register Data</h1>
      <section>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">visitorCategory</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">topic</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">firstName lastName</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">company</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">jobTitle</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">country</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">email</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {forms && forms.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.visitorCategory}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.topic}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.firstName} {item.lastName}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.company}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.jobTitle}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.country}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.email}</td>

                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => setEditForm(item)}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                    >
                      Editar
                    </button>
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