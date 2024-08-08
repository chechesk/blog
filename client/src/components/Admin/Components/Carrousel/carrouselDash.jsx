import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBanner, fetchBaner, updateBanner } from '../../../../redux/Reducer/BannerHome';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necesario para accesibilidad

export default function CarrouselDash() {
  const dispatch = useDispatch();
  const { banners, status, error } = useSelector((state) => state.banner);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: null,
    Title: '',
    SubTitle: '',
    description: '',
    BotonText: '',
    BotonLink: '',
    Active: false,
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBaner());
    }
  }, [status, dispatch]);

  const openModal = (item) => {
    if (item && item.id) {
      setSelectedItem(item);
      setIsModalOpen(true);
    } else {
      console.error('Item is undefined or missing id');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem({
      id: null,
      Title: '',
      SubTitle: '',
      description: '',
      BotonText: '',
      BotonLink: '',
      Active: false,
    });
  };

  const handleSave = async () => {
    if (selectedItem && selectedItem.id) {
      await dispatch(updateBanner({ id: selectedItem.id, updates: selectedItem }));
      closeModal();
    } else {
      console.error('Selected item is undefined or missing id');
    }
  };

  const handleDelete = async (id) => {
    await dispatch(deleteBanner(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8 ml-12">
      <h1 className="text-2xl font-bold mb-4">Carrousel Home Panel</h1>
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
                      onClick={() => openModal(item)}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
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

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Item"
        className="modal"
        overlayClassName="overlay"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000, // Asegúrate de que el overlay esté encima de todo
          },
          content: {
            position: 'relative',
            inset: 'auto',
            width: '500px',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            margin: '0 auto', // Centrar horizontalmente
          },
        }}
      >
        {selectedItem && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={selectedItem.Title || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Title: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                <input
                  type="text"
                  value={selectedItem.SubTitle || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, SubTitle: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={selectedItem.description || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Button Text</label>
                <input
                  type="text"
                  value={selectedItem.BotonText || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, BotonText: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Button Link</label>
                <input
                  type="text"
                  value={selectedItem.BotonLink || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, BotonLink: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Active</label>
                <input
                  type="checkbox"
                  checked={selectedItem.Active || false}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Active: e.target.checked })}
                  className="mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}