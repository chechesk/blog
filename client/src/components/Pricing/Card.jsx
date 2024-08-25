// src/components/Card.js
import React from 'react';

const Card = ({ title, price, features, buttonText, buttonLink }) => {
  return (
    <div className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
      <div className="w-full flex-grow">
        <h2 className="text-center font-bold uppercase mb-4">{title}</h2>
        <h3 className="text-center font-bold text-4xl mb-2">{price}<span className="text-lg">/mo</span></h3>
        <p className="text-center font-bold mb-5">
          <a href={buttonLink} className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>
        </p>
        <ul className="text-sm px-5 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {feature}</li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;