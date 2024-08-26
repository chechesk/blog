// src/components/AdminConfig/AdminConfig.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModuleConfig, updateModuleConfig } from '../../../../redux/Reducer/adminConfig';


const AdminConfig = () => {
  const dispatch = useDispatch();
  const { modules, loading, error } = useSelector((state) => state.adminConfig);

  useEffect(() => {
    dispatch(fetchModuleConfig());
  }, [dispatch]);

  const handleToggle = async (module_name) => {
    const is_active = !modules[module_name];
   await dispatch(updateModuleConfig({ module_name, is_active }));
   dispatch(fetchModuleConfig());
  };

  if (loading) return <div className='p-8 ml-12'>Loading...</div>;
  if (error) return <div className='p-8 ml-12'>Error: {error}</div>;

  return (
    <div className='p-8 ml-12'>
      <h1>Admin Configuration</h1>
      {Object.keys(modules).map((module) => (
        <div key={module}>
          <label>
            <input
              type="checkbox"
              checked={modules[module]}
              onChange={() => handleToggle(module)}
            />
            {module}
          </label>
          
        </div>
      ))}
    </div>
  );
};

export default AdminConfig;