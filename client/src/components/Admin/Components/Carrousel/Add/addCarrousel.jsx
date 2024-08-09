import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBanner } from '../../../../../redux/Reducer/BannerHome'; // Ajusta la ruta según sea necesario
import { Link, useNavigate } from 'react-router-dom';

export default function AddCarrousel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Title: '',
    SubTitle: '',
    description: '',
    BotonText: '',
    BotonLink: '',
    Active: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.Title) newErrors.Title = 'Title is required';
    if (!form.SubTitle) newErrors.SubTitle = 'Subtitle is required';
    if (!form.description) newErrors.description = 'Description is required';
    if (!form.BotonText) newErrors.BotonText = 'Button text is required';
    if (!form.BotonLink) newErrors.BotonLink = 'Button link is required';
    return newErrors;
  };

  const handleSave = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      await dispatch(addBanner(form));
      // Opcional: limpiar el formulario después de guardar
      setForm({
        Title: '',
        SubTitle: '',
        description: '',
        BotonText: '',
        BotonLink: '',
        Active: false,
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Banner</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="Title"
            value={form.Title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.Title && <p className="text-red-500 text-xs mt-1">{errors.Title}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">SubTitle</label>
          <input
            type="text"
            name="SubTitle"
            value={form.SubTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.SubTitle && <p className="text-red-500 text-xs mt-1">{errors.SubTitle}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Button Text</label>
          <input
            type="text"
            name="BotonText"
            value={form.BotonText}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.BotonText && <p className="text-red-500 text-xs mt-1">{errors.BotonText}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Button Link</label>
          <input
            type="text"
            name="BotonLink"
            value={form.BotonLink}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.BotonLink && <p className="text-red-500 text-xs mt-1">{errors.BotonLink}</p>}
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="Active"
            checked={form.Active}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Active</label>
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-blue-500 text-white py-2 rounded mb-4"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate('/admin/dashboard/banner')}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Back
        </button>
      </form>
    </div>
  );
}