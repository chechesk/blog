import React, { useState } from 'react';

const KeywordInput = ({ keywords, setKeywords }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      setKeywords([...keywords, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center">
        {Array.isArray(keywords) && keywords.map((keyword, index) => (
          <span key={index} className="inline-flex items-center justify-center rounded-full border border-purple-500 px-2.5 py-0.5 text-purple-700 m-1">
            <p className="whitespace-nowrap text-sm">{keyword}</p>
            <button
              className="-me-1 ms-1.5 inline-block rounded-full bg-purple-200 p-0.5 text-purple-700 transition hover:bg-purple-300"
              onClick={() => handleRemoveKeyword(index)}
            >
              <span className="sr-only">Remove badge</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="mt-2 p-2 border border-gray-300 rounded"
        placeholder="Enter a keyword and press Enter"
      />
    </div>
  );
};

export default KeywordInput;