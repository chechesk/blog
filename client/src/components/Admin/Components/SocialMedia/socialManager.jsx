import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocialMedia, deleteSocialMedia, fetchSocialMedia, updateSocialMedia } from '../../../../redux/Reducer/socialMedia';
import AddSocialMediaModal from './AddSocialMediaModal';
import EditSocialMediaModal from './EditSocialMediaModal';

const SocialMediaManager = () => {
  const dispatch = useDispatch();
  const { socialMedia, loading, error } = useSelector((state) => state.socialmedia);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editSocialMedia, setEditSocialMedia] = useState(null);

  useEffect(() => {
    dispatch(fetchSocialMedia());
  }, [dispatch]);

  const handleAdd = (newSocialMedia) => {
    dispatch(addSocialMedia(newSocialMedia));
    setIsAddModalOpen(false);
  };

  const handleUpdate = async (updatedSocialMedia) => {
    await dispatch(updateSocialMedia(updatedSocialMedia));
    dispatch(fetchSocialMedia());
    setIsEditModalOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteSocialMedia(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='p-8 ml-12'>
      <h2>Manage Social Media</h2>
      <button onClick={() => setIsAddModalOpen(true)} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">Add Social Media</button>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Url</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">SVG</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Imagen</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {socialMedia.map((media) => (
              <tr key={media.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{media.nombre}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><a href={media.url} target="_blank" rel="noopener noreferrer">{media.url}</a></td>
                <td className="whitespace px-4 py-2 text-gray-700 w-66">{media.svg}</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><div dangerouslySetInnerHTML={{ __html: media.svg }} /></td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button onClick={() => { setEditSocialMedia(media); setIsEditModalOpen(true); }} className="mr-2 px-4 py-2 bg-yellow-600 text-white rounded">Edit</button>
                  <button onClick={() => handleUpdate({ ...media, activo: !media.activo })} className="mr-2 px-4 py-2 bg-gray-600 text-white rounded">
                    {media.activo ? 'Deactivate' : 'Activate'}
                  </button>
                  <button onClick={() => handleDelete(media.id)} className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddSocialMediaModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAdd}
      />

      {editSocialMedia && (
        <EditSocialMediaModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleUpdate}
          socialMedia={editSocialMedia}
        />
      )}
    </div>
  );
};

export default SocialMediaManager;