import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../../redux/Reducer/contact';

export default function Contact() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Subject: '',
    Message: '',
  });
  const [errors, setErrors] = useState({});



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

  const validate = () => {
    let isValid = true;
    let newErrors = {};
    
    if (!formData.Name) {
      newErrors.Name = 'Name is required';
      isValid = false;
    }
    if (!formData.Email) {
      newErrors.Email = 'Email is required';
      isValid = false;
    }
    if (!formData.Phone) {
      newErrors.Phone = 'Phone is required';
      isValid = false;
    }
    if (!formData.Subject) {
      newErrors.Subject = 'Subject is required';
      isValid = false;
    }
    if (!formData.Message) {
      newErrors.Message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(createContact(formData));
      setFormData({
        Name: '',
        Email: '',
        Phone: '',
        Subject: '',
        Message: '',
      });
      alert('Registro completado');
    } else {
      alert('Por favor, corrige errores en el formulario.');
    }
  };

  return (
    <div className="text-gray-400 bg-gray-900 body-font mini:h-[1150px] md:h-[1000px]">
      <div className="h-screen flex items-center justify-center">
        <div className="m-auto pt-24 md:pt-0 grid grid-cols-1 md:grid-cols-3 h-fit w-11/12 sm:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 rounded shadow overflow-hidden text-white">
          <div className="p-2 sm:p-4 md:p-6 h-full bg-gray-800 col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 p-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-start">Send Us A Message</h2>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward" width="33" height="33" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                  <path d="M3 6l9 6l9 -6" />
                  <path d="M15 18h6" />
                  <path d="M18 15l3 3l-3 3" />
                </svg>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 py-6 px-4 md:py-8 md:px-8 text-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Name <span className="text-red-500">&#42;</span></label>
                  <input value={formData.Name} onChange={handleChange} className="border border-white bg-gray-800 p-2 rounded-md" placeholder="Enter Your Name" required name="Name" type="text" />
                  {errors.Name && <p className="text-red-500 text-xs">{errors.Name}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Email <span className="text-red-500">&#42;</span></label>
                  <input value={formData.Email} onChange={handleChange} className="border border-white bg-gray-800 p-2 rounded-md" placeholder="Enter Your Email" required name="Email" type="email" />
                  {errors.Email && <p className="text-red-500 text-xs">{errors.Email}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Phone <span className="text-red-500">&#42;</span></label>
                  <input value={formData.Phone} onChange={handleChange} className="border border-white bg-gray-800 p-2 rounded-md" placeholder="Enter Your Phone Number" required name="Phone" type="tel" />
                  {errors.Phone && <p className="text-red-500 text-xs">{errors.Phone}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">Subject <span className="text-red-500">&#42;</span></label>
                  <input value={formData.Subject} onChange={handleChange} className="border border-white bg-gray-800 p-2 rounded-md" placeholder="Enter Your Subject" required name="Subject" type="text" />
                  {errors.Subject && <p className="text-red-500 text-xs">{errors.Subject}</p>}
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="font-semibold">Message <span className="text-red-500">&#42;</span></label>
                  <textarea value={formData.Message} onChange={handleChange} className="border border-white bg-gray-800 p-2 rounded-md" placeholder="Enter Your Message" required name="Message" rows="4"></textarea>
                  {errors.Message && <p className="text-red-500 text-xs">{errors.Message}</p>}
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end py-4 px-8">
                <button type="submit" className="py-2 px-4 md:py-3 md:px-6 bg-gray-800 rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all">
                  <span className="text-xl">Submit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="py-6 px-4 h-[500px] mini:h-[280px] md:h-full bg-blue-800 grid grid-cols-1 grid-rows-5">
            <h2 className="mt-8 text-xl lg:text-2xl text-center font-semibold">Contact Information</h2>
            <div className="row-span-4 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-share" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
                <path d="M3 7l9 6l9 -6" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>
              <span>yourmail@support.com</span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <a title="youtube" href="#"><img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/521936/youtube.svg" alt="YouTube" /></a>
              <a title="linkedin" href="#"><img className="h-12 w-12 invert" src="https://www.svgrepo.com/show/520815/linkedin.svg" alt="LinkedIn" /></a>
              <a title="instagram" href="#"><img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Instagram" /></a>
              <a title="github" href="#"><img className="h-8 w-8 invert" src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" /></a>
            </div>
            <h1 className="text-center"> Follow me on GitHub <a href="https://github.com/chechesk">chechesk</a> </h1>
          </div>
        </div>
      </div>
    </div>
  );
}