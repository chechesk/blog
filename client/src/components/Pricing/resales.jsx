// src/components/Price.js
import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPriceCards } from '../../redux/Reducer/PriceCards';


const Price = () => {
  const dispatch = useDispatch()
  const {pricecards, loading, error} = useSelector(state => state.pricecards);

  useEffect(() => {
    dispatch(fetchPriceCards());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='flex justify-center space-x-4 px-2 lg:mx-40'>
      <div className="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-5">Pricing</h1>
          <h3 className="text-xl font-medium mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos laboriosam odit accusamus porro</h3>
        </div>
        <div className="w-full md:flex mb-5">
          {pricecards.map((plan, index) => (
            <Card
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonLink={plan.buttonLink}
            />
          ))}
        </div>
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs leading-tight">*Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eligendi officiis, impedit ducimus eaque a corporis, dolore quia officia quam tenetur suscipit dolores, quos, quaerat quo provident iusto. Eius, impedit!</p>
        </div>
      </div>
    </div>
  );
};

export default Price;