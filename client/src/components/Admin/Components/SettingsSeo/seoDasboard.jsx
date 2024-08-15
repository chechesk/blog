import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeoSettings, updateSeoSettings } from '../../../../redux/Reducer/seo';
import KeywordInput from './keyword';

const EditSeoSettings = () => {
  const dispatch = useDispatch();
  const { id, title, description, keywords, status, error } = useSelector((state) => state.seo);
  const [formState, setFormState] = useState({ title: '', description: '', keywords: [] });

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

  const handleKeywordsChange = (newKeywords) => {
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
    <div className='p-8 ml-12'>
    <form onSubmit={handleSubmit}>
      <div className=''>
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
        <KeywordInput keywords={formState.keywords} setKeywords={handleKeywordsChange} />
      </div>
      <button type="submit" className="mt-4 p-2 bg-purple-500 text-white rounded">Save</button>
    </form>
    </div>
  );
};

export default EditSeoSettings;