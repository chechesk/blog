import React, { useState, useEffect } from 'react';

const EditSocialMediaModal = ({ isOpen, onClose, onUpdate, socialMedia }) => {
  const [updatedSocialMedia, setUpdatedSocialMedia] = useState({ nombre: '', url: '', activo: true, svg: '' });

  useEffect(() => {
    if (socialMedia) {
      setUpdatedSocialMedia(socialMedia);
    }
  }, [socialMedia]);

  const handleUpdate = async () => {
    await onUpdate(updatedSocialMedia);
  };

  if (!isOpen || !socialMedia) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2>Edit Social Media</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={updatedSocialMedia.nombre}
          onChange={(e) => setUpdatedSocialMedia({ ...updatedSocialMedia, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="URL"
          value={updatedSocialMedia.url}
          onChange={(e) => setUpdatedSocialMedia({ ...updatedSocialMedia, url: e.target.value })}
        />
        <textarea
          placeholder="SVG"
          value={updatedSocialMedia.svg}
          onChange={(e) => setUpdatedSocialMedia({ ...updatedSocialMedia, svg: e.target.value })}
        ></textarea>
        <div className="mt-4">
          <button onClick={handleUpdate} className="mr-2 px-4 py-2 bg-blue-600 text-white rounded">Update</button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditSocialMediaModal;