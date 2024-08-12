import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage, fetchImages } from '../../../../redux/Reducer/ImageControl';

const ImageGallery = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDelete = () => {
    if (selectedImage) {
      dispatch(deleteImage(selectedImage.fullPath));
      setSelectedImage(null);
    }
  };

  // Depuración
  console.log('Imágenes:', images);
  console.log('Cargando:', loading);
  console.log('Error:', error);

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <div className="flex flex-wrap gap-2 p-4">
        {images.length > 0 ? images.map((image) => (
          <img
            key={image.fullPath}
            src={`https://xtlvekijzoajncsustpe.supabase.co/storage/v1/object/public/CGS/${image.fullPath}`}
            alt={image.object_name}
            className="max-w-xs cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        )) : <p>No hay imágenes disponibles.</p>}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4">
          <img
            src={`https://xtlvekijzoajncsustpe.supabase.co/storage/v1/object/public/CGS/${selectedImage.fullPath}`}
            alt={selectedImage.object_name}
            className="max-w-full max-h-4/5 mb-4"
          />
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;