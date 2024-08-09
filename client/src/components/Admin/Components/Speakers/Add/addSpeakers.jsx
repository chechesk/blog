import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSpeaker } from '../../../../../redux/Reducer/NewsSpeakers';

const countryFlags = {
  "Argentina": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
  "Brasil": "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
  "Peru": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
  "Chile": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
  "Uruguay": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
  "Francia": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  "USA": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  "United Kingdom": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  "Ucrania": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"
};

export default function AddSpeakers() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    Nombre: '',
    Apellido: '',
    Cargo: '',
    Empresa: '',
    Pais: '',
    Image: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!form.Nombre) formErrors.Nombre = 'Name is required';
    if (!form.Apellido) formErrors.Apellido = 'Last Name is required';
    if (!form.Cargo) formErrors.Cargo = 'Role is required';
    if (!form.Empresa) formErrors.Empresa = 'Company is required';
    if (!form.Pais) formErrors.Pais = 'Country is required';
    if (!form.Image) formErrors.Image = 'Image URL is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateForm()) {
      await dispatch(addSpeaker(form));
      setForm({
        Nombre: '',
        Apellido: '',
        Cargo: '',
        Empresa: '',
        Pais: '',
        Image: '',
      });
      setErrors({});
    }
  };

  return (
    <div className='p-8 ml-12'>
      <h1>Add Speaker</h1>
      <section>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="Nombre"
              value={form.Nombre}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${errors.Nombre && 'border-red-500'}`}
            />
            {errors.Nombre && <p className="text-red-500 text-xs mt-1">{errors.Nombre}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="Apellido"
              value={form.Apellido}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${errors.Apellido && 'border-red-500'}`}
            />
            {errors.Apellido && <p className="text-red-500 text-xs mt-1">{errors.Apellido}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              name="Cargo"
              value={form.Cargo}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${errors.Cargo && 'border-red-500'}`}
            />
            {errors.Cargo && <p className="text-red-500 text-xs mt-1">{errors.Cargo}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              name="Empresa"
              value={form.Empresa}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${errors.Empresa && 'border-red-500'}`}
            />
            {errors.Empresa && <p className="text-red-500 text-xs mt-1">{errors.Empresa}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <select
              name="Pais"
              value={form.Pais}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${errors.Pais && 'border-red-500'}`}
            >
              <option value="">Select a country</option>
              {Object.keys(countryFlags).map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            {errors.Pais && <p className="text-red-500 text-xs mt-1">{errors.Pais}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="text"
              name="Image"
              value={form.Image}
              onChange={handleInputChange}
              className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm ${errors.Image && 'border-red-500'}`}
            />
            {errors.Image && <p className="text-red-500 text-xs mt-1">{errors.Image}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <a href="/admin/dashboard/speakers">
              <button
                type="button"
                className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}