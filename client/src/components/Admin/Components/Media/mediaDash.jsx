import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMedia, fetchMedia, updateMedia } from '../../../../redux/Reducer/NewsMedia';


export default function MediaDash() {
  const dispatch = useDispatch();
  const { media, loading, error } = useSelector((state) => state.media);
  const [editMode, setEditMode] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchMedia());
  }, [dispatch]);

  const handleEdit = (item) => {
    setEditMode(item.id);
    setEditFormData(item);
  };

  const handleSave = () => {
    dispatch(updateMedia(editFormData));
    setEditMode(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteMedia(id));
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const filteredMediaData = media.filter((item) =>
    item.Url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8 ml-12">
      <h1 className="text-2xl font-bold mb-4">Panel de Aliados Estrategicos</h1>
      <a href="/admin/dashboard/strategy/add">
        <button
          type="button"
          className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Add Media
        </button>
      </a>
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
      <div className="strategy-list">
        {filteredMediaData.map((item) => (
          <div key={item.id} className="overflow-x-auto mb-8">
            <h2 className="text-xl font-semibold mb-4">{item.category}</h2>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">ID</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Image</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">URL</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Active</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.id}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.Image && <img src={item.Image} alt="Strategy" className="mb-2 max-h-16" />}
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
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {editMode === item.id ? (
                      <select
                        value={editFormData.Active ? 'true' : 'false'}
                        onChange={(e) => setEditFormData({ ...editFormData, Active: e.target.value === 'true' })}
                        className="border rounded px-2 py-1"
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
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
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}