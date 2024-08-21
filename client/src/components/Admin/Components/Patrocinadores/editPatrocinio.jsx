import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateForm } from '../../../../redux/Reducer/Form';

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
    dispatch(updateForm(formData));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl mb-4">Editar Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="">Categoria Visitante
            <input 
              type="text" 
              name="visitorCategory" 
              placeholder="Visitor Category" 
              value={formData.visitorCategory}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Departamento
            <input 
              type="text" 
              name="topic" 
              placeholder="Topic" 
              value={formData.topic}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Nombre
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Apellido
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">
                Empresa
            
            <input 
              type="text" 
              name="company" 
              placeholder="Company" 
              value={formData.company}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Cargo
            <input 
              type="text" 
              name="jobTitle" 
              placeholder="Job Title" 
              value={formData.jobTitle}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Pais
            <input 
              type="text" 
              name="country" 
              placeholder="Country" 
              value={formData.country}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            /></label>
            <label htmlFor="">Correo
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
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