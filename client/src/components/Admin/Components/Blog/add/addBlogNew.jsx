import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNew } from "../../../../../redux/Reducer/NewsBlog";
import supabase from "../../../../../redux/supabase";


const AddBlogNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Title: '',
    Content: '',
    Fecha: '',
    Active: false,
    Galery: []
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, files } = e.target;
    if (name === 'Image' && files) {
      setImageFile(files[0]);
      setImagePreview(URL.createObjectURL(files[0])); // Generar la URL de previsualización
    } else if (name === 'Galery' && files) {
      setForm((prevForm) => ({
        ...prevForm,
        Galery: Array.from(files).map((file) => file),
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: name === 'Active' ? checked : value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.Title) newErrors.Title = 'Title is required';
    if (!form.Content) newErrors.Content = 'Content is required';
    if (!form.Fecha) newErrors.Fecha = 'Date is required';
    return newErrors;
  };

  const uploadFileWithUniqueName = async (file, bucket, path) => {
    let fileName = file.name;
    let filePath = `${path}/${fileName}`;
    let counter = 0;

    while (true) {
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, { upsert: false });

      if (!uploadError) {
        // Successfully uploaded
        return filePath;
      } else if (uploadError.status === 409) {
        // File already exists, increment counter and try a new name
        counter++;
        fileName = `${file.name.split('.').slice(0, -1).join('.')}_${counter}.${file.name.split('.').pop()}`;
        filePath = `${path}/${fileName}`;
      } else {
        // Other error
        throw uploadError;
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        // Subir las imágenes de la galería a Supabase Storage con nombres únicos
        const galleryUrls = await Promise.all(
          form.Galery.map(async (file) => {
            const filePath = await uploadFileWithUniqueName(file, 'CGS', 'public/new');
            const { data } = supabase.storage.from('CGS').getPublicUrl(filePath);
            return data.publicUrl;
          })
        );

        // Subir la imagen principal (si existe)
        let mainImageUrl = '';
        if (imageFile) {
          const filePath = await uploadFileWithUniqueName(imageFile, 'CGS', 'public/new');
          const { data } = supabase.storage.from('CGS').getPublicUrl(filePath);
          mainImageUrl = data.publicUrl;
        }

        // Actualizar el formulario con las URLs de las imágenes
        const updatedForm = { ...form, Image: mainImageUrl, Galery: galleryUrls };

        await dispatch(addNew(updatedForm));
        navigate('/admin/dashboard/blog');

        // Opcional: limpiar el formulario después de guardar
        setForm({
          Title: '',
          Content: '',
          Fecha: '',
          Active: false,
          Galery: [],
        });
        setImageFile(null);
        setImagePreview(null); // Limpiar la previsualización
        setErrors({});
      } catch (error) {
        setErrors({ Image: 'Failed to upload image' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Agregar Nueva Noticia</h2>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
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
          <label className="block text-gray-700">Contenido</label>
          <textarea
            name="Content"
            value={form.Content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.Content && <p className="text-red-500 text-xs mt-1">{errors.Content}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha</label>
          <input
            type="date"
            name="Fecha"
            value={form.Fecha}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.Fecha && <p className="text-red-500 text-xs mt-1">{errors.Fecha}</p>}
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="Active"
            checked={form.Active}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Activo</label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Imagen Principal</label>
          <input
            type="file"
            name="Image"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {imagePreview && (
            <div className="mt-4 h-40 w-40">
              <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-md" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Galería</label>
          <input
            type="file"
            name="Galery"
            multiple
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <div className="flex mt-2">
            {form.Galery.map((file, index) => (
              <img key={index} src={URL.createObjectURL(file)} alt={`Gallery ${index}`} className="w-1/4 h-auto mr-2" />
            ))}
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddBlogNew;