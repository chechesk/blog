// src/components/EditPriceModal.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePriceCards, fetchPriceCards } from '../../../../redux/Reducer/PriceCards';

const EditPriceModal = ({ isOpen, onClose, card }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.pricecards);
  const [updatedCard, setUpdatedCard] = useState({ ...card });

  useEffect(() => {
    setUpdatedCard({ ...card });
  }, [card]);

  const handleUpdateCard = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updatePriceCards(updatedCard));
      dispatch(fetchPriceCards()); // Fetch the updated list of price cards
      onClose();
    } catch (err) {
      console.error('Failed to update card:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-medium mb-4">Edit Card</h2>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <form onSubmit={handleUpdateCard}>
          <input
            type='text'
            placeholder='Title'
            value={updatedCard.title}
            onChange={(e) => setUpdatedCard({ ...updatedCard, title: e.target.value })}
            className='border p-2 mb-2 w-full'
          />
          <input
            type='text'
            placeholder='Price'
            value={updatedCard.price}
            onChange={(e) => setUpdatedCard({ ...updatedCard, price: e.target.value })}
            className='border p-2 mb-2 w-full'
          />
          <input
            type='text'
            placeholder='Features (comma-separated)'
            value={updatedCard.features.join(', ')}
            onChange={(e) => setUpdatedCard({ ...updatedCard, features: e.target.value.split(',').map(feature => feature.trim()) })}
            className='border p-2 mb-2 w-full'
          />
          <input
            type='text'
            placeholder='Button Text'
            value={updatedCard.buttonText}
            onChange={(e) => setUpdatedCard({ ...updatedCard, buttonText: e.target.value })}
            className='border p-2 mb-2 w-full'
          />
          <input
            type='text'
            placeholder='Button Link'
            value={updatedCard.buttonLink}
            onChange={(e) => setUpdatedCard({ ...updatedCard, buttonLink: e.target.value })}
            className='border p-2 mb-2 w-full'
          />
          <div className="flex justify-end mt-4">
            <button onClick={onClose} className='mr-2 px-4 py-2 bg-gray-300 rounded-md'>Cancel</button>
            <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Update Card</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPriceModal;