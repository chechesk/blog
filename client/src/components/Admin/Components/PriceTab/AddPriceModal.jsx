// src/components/AddPriceModal.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPriceCards } from '../../../../redux/Reducer/PriceCards';

const AddPriceModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.pricecards);
  const [newCard, setNewCard] = useState({ title: '', price: '', features: [], buttonText: '', buttonLink: '' });

  const handleAddCard = async () => {
    await dispatch(addPriceCards(newCard));
    setNewCard({ title: '', price: '', features: [], buttonText: '', buttonLink: '' }); // Clear input fields
    onClose(); // Close the modal after adding the card
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-medium mb-4">Add New Card</h2>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <input
          type='text'
          placeholder='Title'
          value={newCard.title}
          onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
          className='border p-2 mb-2 w-full'
        />
        <input
          type='text'
          placeholder='Price'
          value={newCard.price}
          onChange={(e) => setNewCard({ ...newCard, price: e.target.value })}
          className='border p-2 mb-2 w-full'
        />
        <input
          type='text'
          placeholder='Features (comma-separated)'
          value={newCard.features.join(', ')}
          onChange={(e) => setNewCard({ ...newCard, features: e.target.value.split(',').map(feature => feature.trim()) })}
          className='border p-2 mb-2 w-full'
        />
        <input
          type='text'
          placeholder='Button Text'
          value={newCard.buttonText}
          onChange={(e) => setNewCard({ ...newCard, buttonText: e.target.value })}
          className='border p-2 mb-2 w-full'
        />
        <input
          type='text'
          placeholder='Button Link'
          value={newCard.buttonLink}
          onChange={(e) => setNewCard({ ...newCard, buttonLink: e.target.value })}
          className='border p-2 mb-2 w-full'
        />
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className='mr-2 px-4 py-2 bg-gray-300 rounded-md'>Cancel</button>
          <button onClick={handleAddCard} className='bg-blue-500 text-white p-2 rounded'>Add Card</button>
        </div>
      </div>
    </div>
  );
};

export default AddPriceModal;