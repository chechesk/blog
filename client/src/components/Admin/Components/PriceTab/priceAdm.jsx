// src/components/AdminPanel.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPriceCards, deletePriceCards } from '../../../../redux/Reducer/PriceCards';
import AddPriceModal from './AddPriceModal';
import EditPriceModal from './EditPriceModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const PricePanel = () => {
  const dispatch = useDispatch();
  const { pricecards, loading, error } = useSelector((state) => state.pricecards);
  const [deleteCardId, setDeleteCardId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [cardToEdit, setCardToEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchPriceCards());
  }, [dispatch]);

  const handleDeleteCard = async (id) => {
    await dispatch(deletePriceCards(id)).unwrap();
    dispatch(fetchPriceCards()); // Fetch the updated list of price cards
  };

  const closeDeleteModal = () => {
    setDeleteCardId(null); // Close the delete modal
  };

  const openAddModal = () => {
    setIsAddModalOpen(true); // Open the add card modal
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false); // Close the add card modal
  };

  const openEditModal = (card) => {
    setCardToEdit(card); // Set the card to be edited
    setIsEditModalOpen(true); // Open the edit card modal
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false); // Close the edit card modal
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='p-8 ml-12'>
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <button onClick={openAddModal} className='bg-blue-500 text-white p-2 rounded mb-4'>Add New Card</button>
      <h2 className="text-xl font-medium mb-2">Existing Cards</h2>
      <ul>
        {pricecards.map((card) => (
          <li key={card.id} className='mb-2'>
            <span className='font-bold'>{card.title}</span>
            <button onClick={() => openEditModal(card)} className='bg-yellow-500 text-white p-2 rounded ml-4'>Edit</button>
            <button onClick={() => setDeleteCardId(card.id)} className='bg-red-500 text-white p-2 rounded ml-4'>Delete</button>
          </li>
        ))}
      </ul>

      {deleteCardId && (
        <DeleteConfirmationModal
          formId={deleteCardId}
          onClose={closeDeleteModal}
        />
      )}

      {isAddModalOpen && (
        <AddPriceModal
          isOpen={isAddModalOpen}
          onClose={closeAddModal}
        />
      )}

      {isEditModalOpen && cardToEdit && (
        <EditPriceModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          card={cardToEdit}
        />
      )}
    </div>
  );
};

export default PricePanel;