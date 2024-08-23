import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBanner, fetchBaner } from '../../../../redux/Reducer/BannerHome';
import Modal from 'react-modal';
import EditCarrouselModal from './editCarrousel';
import DeleteConfirmationModal from './deleteCarrousel';

Modal.setAppElement('#root'); // Necesario para accesibilidad

export default function CarrouselDash() {
  const dispatch = useDispatch();
  const { banners, status, error } = useSelector((state) => state.banner);
  const [editCarrousel, setEditCarrousel] = useState(null);
  const [deleteCarrouselId, setDeleteCarrouselId] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBaner());
    }
  }, [status, dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteBanner(id));
    setDeleteCarrouselId(null); // Close modal after deletion
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8 ml-12">
      <div className="flex">
        <h1 className="text-2xl font-bold mb-4">Carrousel Home Panel</h1>     
        <a href="/admin/dashboard/banner/add">
          <button
            type="button"
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Add Banner
          </button>
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Subtitle</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Button Text</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Button Link</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Active</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {banners && banners.length > 0 ? (
              banners.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.Title}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.SubTitle}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.description}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.BotonText}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.BotonLink}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Active ? 'Yes' : 'No'}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => setEditCarrousel(item)}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setDeleteCarrouselId(item.id)}
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">No banners found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {editCarrousel && (
        <EditCarrouselModal
          form={editCarrousel}
          onClose={() => setEditCarrousel(null)}
        />
      )}

      {deleteCarrouselId && (
        <DeleteConfirmationModal
          formId={deleteCarrouselId}
          onDelete={() => handleDelete(deleteCarrouselId)}
          onClose={() => setDeleteCarrouselId(null)}
        />
      )}
    </div>
  );
}