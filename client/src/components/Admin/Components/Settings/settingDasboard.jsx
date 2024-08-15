// src/components/EditSettings.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettings, updateSettings } from '../../../../redux/Reducer/setting';


const EditSettings = () => {
  const dispatch = useDispatch();
  const { gtm_id, ga_id, status, error } = useSelector((state) => state.settings);
  const [formState, setFormState] = useState({ gtm_id: '', ga_id: '' });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSettings());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (status === 'succeeded') {
      setFormState({ gtm_id, ga_id });
    }
  }, [status, gtm_id, ga_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSettings(formState));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='p-8 ml-12'>
        <label>Google Tag Manager ID</label>
        <input
        className='ml-1 rounded-lg text-center'
          type="text"
          name="gtm_id"
          value={formState.gtm_id}
          onChange={handleChange}
        />
      </div>
      <div className='p-8 ml-12'>
        <label>Google Analytics ID</label>
        <input
        className='ml-9 rounded-lg text-center'
          type="text"
          name="ga_id"
          value={formState.ga_id}
          onChange={handleChange}
        />
      </div >
      <button className="mt-4 p-2 bg-purple-500 text-white rounded ml-20" type="submit">Save</button>
    </form>
  );
};

export default EditSettings;