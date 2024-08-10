import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSponsore, fetchTypes } from '../../../../../redux/Reducer/NewsSponsore';
import supabase from '../../../../../redux/supabase';

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
  const [imagePreview, setImagePreview] = useState(null); // Estado para la previsualización de la imagen

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === 'Image' && files) {
      setImageFile(files[0]);
      setImagePreview(URL.createObjectURL(files[0])); // Generar la URL de previsualización
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

  const handleSave = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        // Subir la imagen a Supabase Storage con un nombre único
        const filePath = await uploadFileWithUniqueName(imageFile, 'CGS', 'public/sponsore');

        // Obtener la URL pública de la imagen
        const { data } = supabase
          .storage
          .from('CGS')
          .getPublicUrl(filePath);

        const publicUrl = data.publicUrl;

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
        setImagePreview(null); // Limpiar la previsualización
        setErrors({});
      } catch (error) {
        setErrors({ Image: 'Failed to upload image' });
      }
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
          {imagePreview && (
            <div className="mt-4 h-40 w-40 mb-14">
              <img src={imagePreview} alt="Preview" className="max-w-full h-auto rounded-md" />
            </div>
          )}
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
            className="w-full bg-gray-500 text-white py-2 rounded mt-1"
          >
            Cancel
          </button>
        </a>
      </form>
    </div>
  );
}