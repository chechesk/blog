import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSponsore, fetchTypes } from '../../../../../redux/Reducer/NewsSponsore';
import  supabase  from '../../../../../redux/supabase';

export default function AddPatrocinado() {
  const dispatch = useDispatch();
  const types = useSelector(state => state.sponsore.types);
  const typesLoading = useSelector(state => state.sponsore.typesLoading);
  const [form, setForm] = useState({
    Image: '',
    Url: '',
    Active: false,
    Type: '', // Aquí se almacenará el `Name` de `Type_Sponsore`
  });
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === 'Image') {
      setImageFile(files[0]);
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!imageFile) newErrors.Image = 'Image is required';
    if (!form.Url) newErrors.Url = 'URL is required';
    if (!form.Type) newErrors.Type = 'Type is required';
    return newErrors;
  };

  const handleSave = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Subir la imagen a Supabase Storage
      const { data, error } = await supabase.storage
        .from('CGS') // Cambia 'CGS' por el nombre de tu bucket
        .upload(`public/${imageFile.name}`, imageFile);

      if (error) {
        setErrors({ Image: 'Failed to upload image' });
        return;
      }

      // Obtener la URL pública de la imagen
      const { data: { publicUrl } } = supabase
        .storage
        .from('CGS')
        .getPublicUrl(`public/${imageFile.name}`);

      // Actualizar el formulario con la URL de la imagen
      const updatedForm = { ...form, Image: publicUrl };

      await dispatch(addSponsore(updatedForm));
      // Opcional: limpiar el formulario después de guardar
      setForm({
        Image: '',
        Url: '',
        Active: false,
        Type: '',
      });
      setImageFile(null);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  if (typesLoading) {
    return <div>Loading types...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Sponsore</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="Image"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.Image && <p className="text-red-500 text-xs mt-1">{errors.Image}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">URL</label>
          <input
            type="text"
            name="Url"
            value={form.Url}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.Url && <p className="text-red-500 text-xs mt-1">{errors.Url}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Type</label>
          <select
            name="Type"
            value={form.Type}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select Type</option>
            {types.map((type) => (
              <option key={type.Name} value={type.Name}>
                {type.Name}
              </option>
            ))}
          </select>
          {errors.Type && <p className="text-red-500 text-xs mt-1">{errors.Type}</p>}
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
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Save
        </button>
        <a href="/admin/dashboard/patrocinio">
          <button
            type="button"
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </a>
      </form>
    </div>
  );
}