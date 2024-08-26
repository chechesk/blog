import React, { useState } from 'react';

const AddSocialMediaModal = ({ isOpen, onClose, onAdd }) => {
  const [newSocialMedia, setNewSocialMedia] = useState({ nombre: '', url: '', activo: true, svg: '' });

  const handleAdd = () => {
    onAdd(newSocialMedia);
    setNewSocialMedia({ nombre: '', url: '', activo: true, svg: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2>Add Social Media</h2>
        <input type="text" placeholder="Nombre" value={newSocialMedia.nombre} onChange={(e) => setNewSocialMedia({ ...newSocialMedia, nombre: e.target.value })} />
        <input type="text" placeholder="URL" value={newSocialMedia.url} onChange={(e) => setNewSocialMedia({ ...newSocialMedia, url: e.target.value })} />
        <div>
        <textarea className='w-full mt-1' placeholder="SVG" value={newSocialMedia.svg} onChange={(e) => setNewSocialMedia({ ...newSocialMedia, svg: e.target.value })}></textarea>
        </div>
        <div className="mt-4">
          <button onClick={handleAdd} className="mr-2 px-4 py-2 bg-blue-600 text-white rounded">Add</button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddSocialMediaModal;