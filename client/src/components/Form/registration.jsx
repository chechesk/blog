import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createForm } from '../../redux/Reducer/Form';

const Form = () => {
  const dispatch = useDispatch();
  const formStatus = useSelector((state) => state.forms.status);
  const formError = useSelector((state) => state.forms.error);

  const [formData, setFormData] = useState({
    visitorCategory: '',
    topic: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    country: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (formStatus === 'succeeded') {
      alert('Registro completado');
      setFormData({
        visitorCategory: '',
        topic: '',
        firstName: '',
        lastName: '',
        company: '',
        jobTitle: '',
        country: '',
        email: ''
      });
    }
  }, [formStatus]);

  const validate = () => {
    const newErrors = {};

    if (!formData.visitorCategory) {
      newErrors.visitorCategory = 'El campo de categoría de visitante es obligatorio.';
    }

    if (!formData.topic) {
      newErrors.topic = 'El campo de tema de interés es obligatorio.';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El campo de nombre es obligatorio.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El campo de apellidos es obligatorio.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'El campo de empresa es obligatorio.';
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'El campo de cargo es obligatorio.';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'El campo de país es obligatorio.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      newErrors.email = 'El campo de email no tiene un formato válido.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(createForm(formData));
    } else {
      alert('Por favor, corrige errores en el formulario.');
    }
  };

  return (
    <div className="max-w-lg lg:ms-auto mx-auto text-center">
      <div className="py-16 px-7 rounded-md bg-white">
        <form onSubmit={handleSubmit} className="">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="visitorCategory" className="float-left block font-normal text-gray-400 text-lg">Visitor category *</label>
              <select 
                id="visitorCategory" 
                name="visitorCategory" 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
                value={formData.visitorCategory}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Seleccione una categoría</option>
                <option value="IGSA member">IGSA member</option>
              </select>
              {errors.visitorCategory && <span className="text-red-500">{errors.visitorCategory}</span>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="topic" className="float-left block font-normal text-gray-400 text-lg">Select a topic of greatest interest: *</label>
              <select 
                id="topic" 
                name="topic" 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
                value={formData.topic}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Seleccione un tema</option>
                <option value="Industry standards">Industry standards</option>
                <option value="Regulations">Regulations</option>
                <option value="Legislation">Legislation</option>
                <option value="Technology">Technology</option>
              </select>
              {errors.topic && <span className="text-red-500">{errors.topic}</span>}
            </div>

            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              placeholder="Nombre *" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}

            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              placeholder="Apellidos *" 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
              value={formData.lastName}
              onChange={handleChange}
              required 
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
            
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="company" 
                name="company" 
                placeholder="Company *" 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
                value={formData.company}
                onChange={handleChange}
                required 
              />
              {errors.company && <span className="text-red-500">{errors.company}</span>}
            </div>
            
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="jobTitle" 
                name="jobTitle" 
                placeholder="Job title *" 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
                value={formData.jobTitle}
                onChange={handleChange}
                required 
              />
              {errors.jobTitle && <span className="text-red-500">{errors.jobTitle}</span>}
            </div>
            
            <div className="md:col-span-2">
              <input 
                type="text" 
                id="country" 
                name="country" 
                placeholder="Country *" 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
                value={formData.country}
                onChange={handleChange}
                required 
              />
              {errors.country && <span className="text-red-500">{errors.country}</span>}
            </div>
            
            <div className="md:col-span-2">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="E-mail *" 
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            
            <div className="md:col-span-2">
              <button className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300" type="submit">
                {formStatus === 'loading' ? 'Enviando...' : 'Registrar'}
              </button>
              {formStatus === 'failed' && <span className="text-red-500">{formError}</span>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;