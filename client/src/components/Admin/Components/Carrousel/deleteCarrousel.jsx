import React from 'react';
const DeleteConfirmationModal = ({ formId, onDelete, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl mb-4">Confirmar Eliminación</h2>
        <p>¿Estás seguro de que deseas eliminar este registro?</p>
        <div className="mt-4 flex justify-end">
          <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">Cancelar</button>
          <button type="button" onClick={onDelete} className="px-4 py-2 bg-red-600 text-white rounded-md">Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;