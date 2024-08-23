import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBanner } from '../../../../redux/Reducer/BannerHome';

const EditCarrouselModal = ({ form, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(form);

  useEffect(() => {
    setFormData(form);
  }, [form]);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Añadir verificación antes de despachar la acción
    if (formData && formData.id) {
      dispatch(updateBanner({ id: formData.id, updates: formData }));
      onClose();
    } else {
      console.error('Form data is invalid:', formData);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl mb-4">Editar Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="Title">Title
              <input 
                type="text" 
                name="Title" 
                placeholder="Title" 
                value={formData.Title}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              />
            </label>
            <label htmlFor="SubTitle">Subtitle
              <input 
                type="text" 
                name="SubTitle" 
                placeholder="Subtitle" 
                value={formData.SubTitle}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              />
            </label>
            <label htmlFor="description">Description
              <input 
                type="text" 
                name="description" 
                placeholder="Description" 
                value={formData.description}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              />
            </label>
            <label htmlFor="BotonText">Button Text
              <input 
                type="text" 
                name="BotonText" 
                placeholder="Button Text" 
                value={formData.BotonText}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              />
            </label>
            <label htmlFor="BotonLink">Button Link
              <input 
                type="text" 
                name="BotonLink" 
                placeholder="Button Link" 
                value={formData.BotonLink}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3"
              />
            </label>
            <label htmlFor="Active" className="flex items-center mt-4">
              <input 
                type="checkbox" 
                name="Active" 
                checked={formData.Active}
                onChange={(e) => handleChange(e.target.name, e.target.checked)}
                className="mr-2"
              />
              Active
            </label>
          </div>
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCarrouselModal;