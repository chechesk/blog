import React from 'react';

const statsData = [
  {
    "title": "CGS Academy",
    "description": "Treinamento especializado para nossos delegados"
  },
  {
    "title": "Gaming Insights",
    "description": "As conferências mais exclusivas da indústria"
  },
  {
    "title": "XPO 360",
    "description": "Um novo conceito de networking"
  },
  {
    "title": "CGS Awards",
    "description": "Reconhecimento ao melhor da indústria"
  }
];

const Stats = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-60 mini:-translate-y-80 z-10 p-4 mini:p-1 sm:p-8 w-full max-w-screen-lg">
      <div className='grid grid-cols-1 sm:grid-cols-2 mini:grid-cols-2 lg:grid-cols-4 gap-4 bg-green-500 bg-opacity-75 rounded-xl p-4 mini:m-2'>
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white bg-opacity-75 rounded-lg shadow-lg text-center p-4">
            <h2 className="text-sm sm:text-base font-bold text-black">{stat.title}</h2>
            <p className="mt-1 text-black text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;