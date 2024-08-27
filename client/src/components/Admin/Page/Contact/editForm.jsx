import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../../../redux/Reducer/contact';

const EditFormModal = ({ form, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(form);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact(formData));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl mb-4">Editar Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="">Name
            <input 
              type="text" 
              name="Name" 
              placeholder="Name" 
              value={formData.Name}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Email
            <input 
              type="text" 
              name="Email" 
              placeholder="Email" 
              value={formData.Email}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Phone
            <input 
              type="text" 
              name="Phone" 
              placeholder="Phone" 
              value={formData.Phone}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Subject
            <input 
              type="text" 
              name="Subject" 
              placeholder="Subject" 
              value={formData.Subject}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">
            Message
            
            <input 
              type="text" 
              name="Message" 
              placeholder="Message" 
              value={formData.Message}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
           
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

export default EditFormModal;