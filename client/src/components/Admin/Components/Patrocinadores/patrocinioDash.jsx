import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSponsore, editSponsore, deleteSponsore } from '../../../../redux/Reducer/NewsSponsore';

export default function PatrocinioDash() {
  const dispatch = useDispatch();
  const sponsoreData = useSelector(state => state.sponsore.sponsore);
  const loading = useSelector(state => state.sponsore.loading);
  const error = useSelector(state => state.sponsore.error);
  const [editMode, setEditMode] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchSponsore());
  }, [dispatch]);

  const handleEdit = (sponsor) => {
    setEditMode(sponsor.id);
    setEditFormData(sponsor);
  };

  const handleSave = async () => {
    await dispatch(editSponsore(editFormData));
    setEditMode(null);
    setEditFormData({});
    dispatch(fetchSponsore()); // Refrescar los datos después de guardar
  };

  const handleDelete = async (id) => {
    await dispatch(deleteSponsore(id));
    dispatch(fetchSponsore()); // Refrescar los datos después de eliminar
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const filteredSponsoreData = sponsoreData.filter((sponsor) =>
    sponsor.Url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8 ml-12">
      <div className='flex'>
      <h1 className="text-2xl font-bold mb-4">Panel de Patrocinio</h1>
      <a href="/admin/dashboard/patrocinio/add">
            <button
              type="button"
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Add Banner
            </button>
      </a>
      </div>
      
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Search by URL"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleClearSearch}
          className="ml-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Clear
        </button>
      </div>
      <div className="sponsore-list overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">ID</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Image</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">URL</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Category</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Active</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredSponsoreData.map((item) => (
              <tr key={item.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.id}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.Image && <img src={item.Image} alt="Sponsore" className="mb-2 max-h-16" />}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {editMode === item.id ? (
                    <input
                      type="text"
                      value={editFormData.Url}
                      onChange={(e) => setEditFormData({ ...editFormData, Url: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    <a href={item.Url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {item.Url}
                    </a>
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.Type_Sponsore.Name}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {editMode === item.id ? (
                    <select
                      value={editFormData.Active}
                      onChange={(e) => setEditFormData({ ...editFormData, Active: e.target.value })}
                      className="border rounded px-2 py-1"
                    >
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  ) : (
                    item.Active ? 'Yes' : 'No'
                  )}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {editMode === item.id ? (
                    <button
                      onClick={handleSave}
                      className="inline-block rounded bg-green-600 px-6 py-2 text-xs font-medium text-white hover:bg-green-700 mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      className="inline-block rounded bg-indigo-600 px-6 py-2 text-xs font-medium text-white hover:bg-indigo-700 mr-2"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="inline-block rounded bg-red-600 px-6 py-2 text-xs font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}