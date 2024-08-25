// src/components/AlertModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necesario para accesibilidad

const AlertModal = ({ isOpen, onClose, message, type }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-8 rounded-md">
        <div className="flex items-start gap-4">
          <span className={`text-${type === 'success' ? 'green' : 'red'}-600`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={type === 'success' ? 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </span>

          <div className="flex-1">
            <strong className="block font-medium text-gray-900">{type === 'success' ? 'Success' : 'Error'}</strong>
            <p className="mt-1 text-sm text-gray-700">{message}</p>
          </div>

          <button className="text-gray-500 transition hover:text-gray-600" onClick={onClose}>
            <span className="sr-only">Dismiss popup</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AlertModal;