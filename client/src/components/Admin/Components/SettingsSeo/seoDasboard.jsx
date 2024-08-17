import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeoSettings, updateSeoSettings } from '../../../../redux/Reducer/seo';

const EditSeoSettings = () => {
  const dispatch = useDispatch();
  const { id, title, description, keywords, status, error } = useSelector((state) => state.seo);
  const [formState, setFormState] = useState({ title: '', description: '', keywords: [] });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSeoSettings());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded') {
      setFormState({
        title: title || '',
        description: description || '',
        keywords: Array.isArray(keywords) ? keywords : [],
      });
    }
  }, [status, title, description, keywords]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      const newKeywords = [...formState.keywords, inputValue.trim()];
      setFormState((prevState) => ({
        ...prevState,
        keywords: newKeywords,
      }));
      setInputValue('');
    }
  };

  const handleRemoveKeyword = (index) => {
    const newKeywords = formState.keywords.filter((_, i) => i !== index);
    setFormState((prevState) => ({
      ...prevState,
      keywords: newKeywords,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSeoSettings({ id, ...formState }));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8 ml-12">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            className="mt-2 ml-14 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formState.description}
            onChange={handleChange}
            className="mt-2 p-2 ml-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label>Keywords</label>
          <div>
            <div className="flex flex-wrap items-center">
              {Array.isArray(formState.keywords) && formState.keywords.map((keyword, index) => (
                <span key={index} className="inline-flex items-center justify-center rounded-full border border-purple-500 px-2.5 py-0.5 text-purple-700 m-1">
                  <p className="whitespace-nowrap text-sm">{keyword}</p>
                  <button
                    type="button"
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
        </div>
        <button type="submit" className="mt-4 p-2 bg-purple-500 text-white rounded">Save</button>
      </form>
    </div>
  );
};

export default EditSeoSettings;