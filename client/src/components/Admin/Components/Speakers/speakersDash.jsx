import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpeakers, fetchSpeakers, updateSpeakers } from '../../../../redux/Reducer/NewsSpeakers';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necesario para accesibilidad

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

export default function SpeakersDash() {
  const dispatch = useDispatch();
  const { speakers, loading, error } = useSelector((state) => state.speakers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    Nombre: '',
    Apellido: '',
    Cargo: '',
    Empresa: '',
    Pais: '',
    Image: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState('Nombre');

  useEffect(() => {
    dispatch(fetchSpeakers());
  }, [dispatch]);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem({
      Nombre: '',
      Apellido: '',
      Cargo: '',
      Empresa: '',
      Pais: '',
      Image: '',
    });
  };

  const handleSave = async () => {
    if (selectedItem && selectedItem.id) {
      await dispatch(updateSpeakers({ id: selectedItem.id, updates: selectedItem }));
      closeModal();
    } else {
      console.error('Selected item is undefined or missing id');
    }
  };

  const handleDelete = async (id) => {
    await dispatch(deleteSpeakers(id));
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const filteredSpeakers = speakers.filter((speaker) =>
    (speaker[searchField] || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading === 'loading') {
    return <div>Loading...</div>;
  }

  if (loading === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8 ml-12">
      <h1 className="text-2xl font-bold mb-4 text-center">Panel de Speakers</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-[80%]"
        />
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option value="Nombre">Name</option>
          <option value="Cargo">Role</option>
          <option value="Empresa">Company</option>
          <option value="Pais">Country</option>
        </select>
        <button
          onClick={handleClearSearch}
          className="ml-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Clear
        </button>
        <a href="/admin/dashboard/speakers/add">
            <button
              type="button"
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Add Speakers
            </button>
      </a>
      </div>
      <section>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 text-start">
                  <label htmlFor="SelectAll" className="sr-only">Select All</label>
                  <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Image</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Last Name</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Role</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Company</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">Country</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredSpeakers.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 ">
                    <label className="sr-only" htmlFor={`Row${item.id}`}>Row {item.id}</label>
                    <input className="size-5 rounded border-gray-300" type="checkbox" id={`Row${item.id}`} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <img src={item.Image || 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'} alt='Speakers' className='h-20 w-20 rounded-full' />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.Nombre || 'Nombre'}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Apellido || 'Apellido'}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Cargo || 'Cargo'}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.Empresa || 'Empresa'}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <img src={countryFlags[item.Pais]} alt={item.Pais} className='h-6 w-10 rounded' />
                  </td>
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
              ))}
            </tbody>
          </table>
        </div>
      </section>

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
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={selectedItem.Nombre || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Nombre: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={selectedItem.Apellido || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Apellido: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  value={selectedItem.Cargo || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Cargo: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  value={selectedItem.Empresa || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Empresa: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  value={selectedItem.Pais || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Pais: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                >
                  <option value="">Select a country</option>
                  {Object.keys(countryFlags).map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="text"
                  value={selectedItem.Image || ''}
                  onChange={(e) => setSelectedItem({ ...selectedItem, Image: e.target.value })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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